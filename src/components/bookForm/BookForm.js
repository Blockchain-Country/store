import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addBook } from '../../redux/book/ActionCreator'
import booksJson from '../../data/books.json'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState('')
  const dispatch = useDispatch()

  const handleSumbit = (e) => {
    e.preventDefault()
    if (title && year.length === 4 && author) {
      dispatch(
        addBook({
          title,
          author,
          year,
          id: uuidv4(),
          isFavorite: false,
        })
      )
      setTitle('')
      setAuthor('')
      setYear('')
    }
  }

  const handleAddRandom = () => {
    const randomNum = Math.floor(Math.random() * booksJson.length)
    const randomBook = booksJson[randomNum]
    dispatch(
      addBook({
        ...randomBook,
        id: uuidv4(),
        isFavorite: false,
      })
    )
  }

  return (
    <div className="app-block book-form">
      <h2>BookForm</h2>
      <form onSubmit={handleSumbit} className="book-form">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            placeholder="enter book name"
          ></input>
        </div>
        <div>
          <label>Year:</label>
          <input
            value={year}
            onChange={(e) => setYear(e.target.value)}
            id="year"
            type="number"
            placeholder="enter book year"
          ></input>
        </div>
        <div>
          <label htmlFor="title">Author:</label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            id="author"
            type="text"
            placeholder="enter author name"
          ></input>
        </div>
        <button type="submit">Add Book</button>
        <button onClick={handleAddRandom}>Add Random</button>
      </form>
    </div>
  )
}

export default BookForm
