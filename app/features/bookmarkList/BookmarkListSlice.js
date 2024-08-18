import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    listOfBookmark: [ ],
    userName: "Rubayat"
}
export const bookmarkListSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {
        addBookmark: (state, action) => {
            state.listOfBookmark.push(action.payload)
        },

    },
})

export const { addBookmark } = bookmarkListSlice.actions
export default bookmarkListSlice.reducer