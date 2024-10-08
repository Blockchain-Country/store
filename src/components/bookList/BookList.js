import { useDispatch, useSelector } from 'react-redux'
import { FaStar } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'
import {
  DELETE_BOOK,
  TOGGLE_FAVORITE,
  selectBooks,
} from '../../redux/slices/BooksSlice'
import './BookList.css'
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavorite,
} from '../../redux/slices/FilterSlice'

const BookList = () => {
  const books = useSelector(selectBooks)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavorite)
  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    books.forEach((book) => {
      if (book.id === id && book.isFavorite === false) {
        dispatch(DELETE_BOOK(id))
      }
    })
  }

  const handleFavorite = (id) => {
    dispatch(TOGGLE_FAVORITE(id))
  }

  const filteredBooks = books.filter((book) => {
    const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true
    return (
      book.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      book.author.toLowerCase().includes(authorFilter.toLowerCase()) &&
      matchesFavorite
    )
  })

  const highlightMatched = (text, filter) => {
    if (!filter) return text

    const regex = new RegExp(`(${filter})`, 'gi')
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        )
      }
      return substring
    })
  }

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
                <span>{highlightMatched(book.title, titleFilter)}</span>
                <span>{` (${book.year})`}</span>
                <span> by </span>
                <strong>{highlightMatched(book.author, authorFilter)}</strong>
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
