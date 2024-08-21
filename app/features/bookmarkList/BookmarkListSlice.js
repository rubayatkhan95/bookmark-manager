import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    listOfBookmark: [],
    userName: "Rubayat"
};

// Load bookmarks from AsyncStorage
export const loadBookmarks = createAsyncThunk(
    'bookmark/loadBookmarks',
    async () => {
        const bookmarks = await AsyncStorage.getItem('bookmarks');
        console.log("bookmarks", bookmarks)
        return []
        //return bookmarks ? JSON.parse(bookmarks) : [];
    }
);

// Save bookmarks to AsyncStorage
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
            // Add new bookmark to the list
            state.listOfBookmark.push(action.payload);

            // Save updated list to AsyncStorage
            saveBookmarks(state.listOfBookmark);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadBookmarks.fulfilled, (state, action) => {
                // Replace the existing list with the loaded bookmarks
                state.listOfBookmark = action.payload;
                console.log("Loaded bookmarks:", state.listOfBookmark);
            })
            .addCase(saveBookmarks.fulfilled, () => {
                console.log("Bookmarks saved successfully");
            });
    }
})

export const { addBookmark } = bookmarkListSlice.actions;
export default bookmarkListSlice.reducer;
