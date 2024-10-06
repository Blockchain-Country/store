import { createSlice } from '@reduxjs/toolkit'
// import { LuGoal } from 'react-icons/lu'

const initialState = {
  title: '',
}

const filterSlice = createSlice({
  name: 'FILTER',
  initialState,
  reducers: {
    SET_TITLE_FILTER: (state, action) => {
      return { ...state, title: action.payload }
    },
    RESET_FILTER: (state) => {
      return initialState
    },
  },
})

export const { SET_TITLE_FILTER, RESET_FILTER } = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title

export default filterSlice.reducer
