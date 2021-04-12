import PropTypes from 'prop-types';

const CategoryFilter = ({ changeFilter, value, submit }) => (
  <form onSubmit={(event) => submit(event)}>
    <label htmlFor="categorie">
      Filter
      <select id="categorie" onChange={(event) => changeFilter(event)} value={value}>
        <option value="All">All</option>
        <option value="Action">Action</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Kids">Kids</option>
        <option value="Learning">Learning</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
      <br />
    </label>
    <button type="submit">Apply</button>
  </form>
);

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
};

export default CategoryFilter;
