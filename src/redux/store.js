import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './book/Reducer'

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
})

export default store
