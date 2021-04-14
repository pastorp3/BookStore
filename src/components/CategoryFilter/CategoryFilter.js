import PropTypes from 'prop-types';
import './CategoryFilter.css';

const CategoryFilter = ({ changeFilter, value, submit }) => (
  <div className="filter_container">
    <form onSubmit={(event) => submit(event)}>
      <div>
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
      </div>
      <button type="submit" className="ApplyButton">Apply</button>
    </form>
  </div>
);

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
};

export default CategoryFilter;
