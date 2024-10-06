import { useDispatch, useSelector } from 'react-redux'
import { FaStar } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'
import { deleteBook, toggleFavorite } from '../../redux/book/ActionCreator'
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavorite,
} from '../../redux/slices/FilterSlice'
import './BookList.css'

const BookList = () => {
  const books = useSelector((state) => state.books)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavorite)
  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    books.forEach((book) => {
      if (book.id === id && book.isFavorite === false) {
        dispatch(deleteBook(id))
      }
    })
  }

  const handleFavorite = (id) => {
    dispatch(toggleFavorite(id))
  }

  const filteredBooks = books.filter((book) => {
    const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true
    return (
      book.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      book.author.toLowerCase().includes(authorFilter.toLowerCase()) &&
      matchesFavorite
    )
  })

  return (
    <div className="app-block book-list">
      <h2>BookList</h2>
      {books.length === 0 ? (
        <p>There are no books in the list...</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id} className="book-info">
              <div>
                <span>{++i}. </span>
                <span>{book.title}</span>
                <span>{` (${book.year})`}</span>
                <span> by </span>
                <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                <span onClick={() => handleFavorite(book.id)}>
                  {book.isFavorite ? (
                    <FaStar className="star-icon" />
                  ) : (
                    <FaRegStar className="star-icon" />
                  )}
                </span>
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
