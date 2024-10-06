import { createSlice } from '@reduxjs/toolkit'
// import { LuGoal } from 'react-icons/lu'

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
}

const filterSlice = createSlice({
  name: 'FILTER',
  initialState,
  reducers: {
    SET_TITLE_FILTER: (state, action) => {
      return { ...state, title: action.payload }
    },
    SET_AUTHOR_FILTER: (state, action) => {
      return { ...state, author: action.payload }
    },
    SET_ONLY_FAVORITE: (state) => {
      state.onlyFavorite = !state.onlyFavorite
      // return { ...state, onlyFavorite: !state.onlyFavorite }
    },
    RESET_FILTER: (state) => {
      return initialState
    },
  },
})

export const {
  SET_TITLE_FILTER,
  SET_AUTHOR_FILTER,
  SET_ONLY_FAVORITE,
  RESET_FILTER,
} = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectOnlyFavorite = (state) => state.filter.onlyFavorite

export default filterSlice.reducer
