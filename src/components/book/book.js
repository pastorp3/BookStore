import PropTypes from 'prop-types';

const Book = ({
  id,
  title,
  category,
  remove,
}) => (
  <tr>
    <th>
      id:
      {id}
    </th>
    <th>{title}</th>
    <th>{category}</th>
    <th>
      <button type="button" onClick={() => remove(id)}>Remove</button>
    </th>
  </tr>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
