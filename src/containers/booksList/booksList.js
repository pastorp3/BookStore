/* eslint-disable arrow-body-style, max-len, react/forbid-prop-types */

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../../components/book/book';
import { remove } from '../../actions/index';

const BookList = ({ books, removeBook }) => {
  return (
    <div>
      <h1>Books List</h1>
      <table>
        <tbody>
          { books.map((book) => <Book key={book.id} id={book.id} title={book.title} categorie={book.categorie} remove={removeBook} />)}
        </tbody>
      </table>
    </div>
  );
};

const mapSateteProps = (state) => {
  return {
    books: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBook: (bookId) => dispatch(remove(bookId)),
  };
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapSateteProps, mapDispatchToProps)(BookList);

/* eslint-enable arrow-body-style, max-len, react/forbid-prop-types */
