import * as actions from './ActionTypes'

export const addBook = (newBook) => {
  return {
    type: actions.ADD_BOOK,
    payload: newBook,
  }
}
