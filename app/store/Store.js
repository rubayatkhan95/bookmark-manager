import { configureStore } from "@reduxjs/toolkit"
import ToDoReducer from "../features/bookmarkList/BookmarkListSlice"
import CategorySlice from "../features/category/CategorySlice"

export const store = configureStore({
  reducer: {
    bookmark: ToDoReducer,
    category: CategorySlice
  },
})