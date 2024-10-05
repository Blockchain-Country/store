import { useSelector } from 'react-redux'
import './BookList.css'

const BookList = () => {
  const books = useSelector((state) => state.books)

  return (
    <div className="app-block book-list">
      <h2>BookList</h2>
      {books.length === 0 ? (
        <p>There are no books in the list...</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <div key={i}>
              <li className="book-info">
                {++i}. {book.title} by {book.author}
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
