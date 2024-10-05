import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addBook } from '../../redux/book/ActionCreator'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleSumbit = (e) => {
    e.preventDefault()
    if (title && author) {
      dispatch(
        addBook({
          title,
          author,
          id: uuidv4(),
        })
      )
    }

    setTitle('')
    setAuthor('')
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
      </form>
    </div>
  )
}

export default BookForm
