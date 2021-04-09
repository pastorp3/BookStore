import PropTypes from 'prop-types';

const Book = ({ title, categorie }) => (
  <tr>
    <th>{title}</th>
    <th>{categorie}</th>
  </tr>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  categorie: PropTypes.string.isRequired,
};

export default Book;
