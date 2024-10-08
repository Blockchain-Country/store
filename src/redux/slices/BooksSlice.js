import { createSlice } from '@reduxjs/toolkit'

const initialState = []

// {
//   title: '',
//   author: '',
//   year: '',
//   id: uuidv4(),
//   isFavorite: false,
// }

const booksSlice = createSlice({
  name: 'BOOKS',
  initialState,
  reducers: {
    ADD_BOOK: (state, action) => {
      state.push(action.payload)
      //   return [...state, action.payload]
    },
    DELETE_BOOK: (state, action) => {
      //   const index = state.findIndex((book) => book.id === action.payload)
      //   if (index !== -1) {
      //     state.splice(index, 1)
      //   }
      return state.filter((book) => book.id !== action.payload)
    },
    TOGGLE_FAVORITE: (state, action) => {
      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite
        }
      })
      //   return state.map((book) =>
      //     book.id === action.payload
      //       ? { ...state, isFavorite: !book.isFavorite }
      //       : book
      //   )
    },
  },
})

export const { ADD_BOOK, DELETE_BOOK, TOGGLE_FAVORITE } = booksSlice.actions

export const selectBooks = (state) => state.books

export default booksSlice.reducer
