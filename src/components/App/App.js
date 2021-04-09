import './App.css';
import BookList from '../../containers/booksList/booksList';
import BookForm from '../../containers/booksForm/booksForm';

function App() {
  return (
    <div className="App">
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
