import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './book/Reducer'
import filterReducer from './slices/FilterSlice'

const store = configureStore({
  reducer: {
    books: bookReducer,
    filter: filterReducer,
  },
})

export default store
