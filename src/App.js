import './App.css';
import BookList from './components/booksList/booksList';
import BookForm from './components/booksForm/booksForm';

function App() {
  return (
    <div className="App">
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
