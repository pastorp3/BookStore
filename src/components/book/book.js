import PropTypes from 'prop-types';

const Book = ({ id, title, categorie }) => (
  <tr>
    <th>
      id:
      {id}
    </th>
    <th>{title}</th>
    <th>{categorie}</th>
  </tr>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  categorie: PropTypes.string.isRequired,
};

export default Book;
