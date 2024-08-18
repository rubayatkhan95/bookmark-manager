import { configureStore } from "@reduxjs/toolkit"
import CounterReducer from "../features/counter/CounterSlice"
import ToDoReducer from "../features/bookmarkList/BookmarkListSlice"

export const store = configureStore({
  reducer: {
    counter : CounterReducer,
    bookmark: ToDoReducer
  },
})