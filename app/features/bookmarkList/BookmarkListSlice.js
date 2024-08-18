import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
    listOfBookmark: [],
    userName: "Rubayat"
}

export const loadBookmarks = createAsyncThunk(
    'bookmark/loadBookmarks',
    async () => {
        const bookmarks = await AsyncStorage.getItem('bookmarks');
        return bookmarks ? JSON.parse(bookmarks) : [];
    }
);

export const saveBookmarks = createAsyncThunk(
    'bookmark/saveBookmarks',
    async (bookmarks) => {
        await AsyncStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
);

export const bookmarkListSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {
        addBookmark: (state, action) => {
            state.listOfBookmark.push(action.payload)
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(loadBookmarks.fulfilled, (state, action) => {
                state.listOfBookmark = action.payload;
            })
            .addCase(saveBookmarks.fulfilled, (state) => {
                console.log("saved")
            });
    }
})

export const { addBookmark } = bookmarkListSlice.actions
export default bookmarkListSlice.reducer