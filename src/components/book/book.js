import PropTypes from 'prop-types';

const Book = ({
  id,
  title,
  categorie,
  remove,
}) => {
  const handleRemove = () => remove(id);
  return (
    <tr>
      <th>
        id:
        {id}
      </th>
      <th>{title}</th>
      <th>{categorie}</th>
      <th>
        <button type="button" onClick={handleRemove}>Remove</button>
      </th>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  categorie: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
