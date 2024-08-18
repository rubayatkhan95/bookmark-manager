import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    listOfCategory: [
        { id: 1, title: 'Category A' },
        { id: 2, title: 'Category B' },
    ],
    userName: "Rubayat"
}
export const categoryListSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.listOfCategory.push(action.payload)
        },
    },
})

export const { addCategory } = categoryListSlice.actions
export default categoryListSlice.reducer