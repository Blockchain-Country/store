import BookForm from './components/bookForm/BookForm'
import Filter from './components/filter/Filter'
import BookList from './components/bookList/BookList'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>My Book Storage</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
    </div>
  )
}

export default App
