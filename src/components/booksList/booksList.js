/* eslint-disable arrow-body-style, max-len, react/forbid-prop-types */

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../book/book';

const BookList = ({ books }) => {
  return (
    <div>
      <h1>Books List</h1>
      <table>
        <tbody>
          { books.map((book) => <Book key={book.id} title={book.title} categorie={book.categorie} />)}
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

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default connect(mapSateteProps)(BookList);

/* eslint-enable arrow-body-style, max-len, react/forbid-prop-types */
