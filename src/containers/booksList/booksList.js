/* eslint-disable arrow-body-style, max-len, react/forbid-prop-types */

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Book from '../../components/book/book';
import Filter from '../../components/Filter/Filter';
import { remove, filter } from '../../actions/index';

const BookList = ({
  books,
  removeBook,
  filterBook,
  filterValue,
}) => {
  const handleRemove = (id) => removeBook(id);
  const [filter, setFilter] = useState('All');
  const handleFilter = (event) => {
    setFilter(event.target.value);
  };
  const submitFilter = (event) => {
    filterBook(filter);
    event.preventDefault();
  };
  const filterList = filterValue !== 'All' ? books.filter((book) => book.categorie === filterValue) : books;
  return (
    <div>
      <h1>Books List</h1>
      <Filter changeFilter={handleFilter} value={filter} submit={submitFilter} />
      <table>
        <tbody>
          { filterList.map((book) => <Book key={book.id} id={book.id} title={book.title} category={book.categorie} remove={handleRemove} />)}
        </tbody>
      </table>
    </div>
  );
};

const mapSateteProps = (state) => {
  return {
    books: state.book,
    filterValue: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBook: (bookId) => dispatch(remove(bookId)),
    filterBook: (category) => dispatch(filter(category)),
  };
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  filterValue: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  filterBook: PropTypes.func.isRequired,
};

export default connect(mapSateteProps, mapDispatchToProps)(BookList);

/* eslint-enable arrow-body-style, max-len, react/forbid-prop-types */
