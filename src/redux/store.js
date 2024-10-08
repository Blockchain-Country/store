import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './slices/BooksSlice'
import filterReducer from './slices/FilterSlice'

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
  },
})

export default store
