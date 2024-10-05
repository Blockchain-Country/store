import * as actions from './ActionTypes'

export const addBook = (newBook) => {
  return {
    type: actions.ADD_BOOK,
    payload: newBook,
    id: newBook.id,
  }
}

export const deleteBook = (id) => {
  return {
    type: actions.DELETE_BOOK,
    payload: id,
  }
}
