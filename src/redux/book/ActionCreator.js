import * as actions from './ActionTypes'

export const addBook = (newBook, id) => {
  return {
    type: actions.ADD_BOOK,
    payload: newBook,
    id,
  }
}
