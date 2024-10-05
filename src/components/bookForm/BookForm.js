import { useState } from 'react'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSumbit = (e) => {
    e.preventDefault()
    //add func

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
