import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../../redux/book/ActionCreator'
import './BookList.css'

const BookList = () => {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    books.forEach((book) => {
      if (book.id === id) {
        dispatch(deleteBook(id))
      }
    })
  }

  return (
    <div className="app-block book-list">
      <h2>BookList</h2>
      {books.length === 0 ? (
        <p>There are no books in the list...</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id} className="book-info">
              <div>
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
              <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
