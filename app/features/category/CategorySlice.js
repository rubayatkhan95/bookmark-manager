// import { createSlice } from '@reduxjs/toolkit'
// const initialState = {
//     listOfBookmark: [ ],
//     userName: "Rubayat"
// }
// export const bookmarkListSlice = createSlice({
//     name: 'bookmark',
//     initialState,
//     reducers: {
//         addBookmark: (state, action) => {
//             state.listOfBookmark.push(action.payload)
//         },
//         addToDoneList: (state, action) => {
//             //state.listOfDoneBookmark.push(action.payload)
//             let array = state.listOfDoneBookmark
//             let index = action.payload.index
//             let newArray = [...array.slice(0, index), action.payload, ...array.slice(index + 1)];
//             state.listOfDoneBookmark = newArray;
//         },
//         updateBookmark: (state, action) => {
//             const { id, isActive } = action.payload;
//             const bookmarkToUpdate = state.listOfBookmark.find(bookmark => bookmark.id === id);
//             if (bookmarkToUpdate) {
//                 bookmarkToUpdate.isActive = isActive;
//             }
//         },
//     },
// })

// // Action creators are generated for each case reducer function
// export const { addBookmark, updateBookmark, addToDoneList } = bookmarkListSlice.actions

// export default bookmarkListSlice.reducer