import './App.css';
import BookList from '../../containers/booksList/booksList';
import BookForm from '../../containers/booksForm/booksForm';
import Navbar from '../Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main_container">
        <BookList />
        <BookForm />
      </div>
    </div>
  );
}

export default App;
