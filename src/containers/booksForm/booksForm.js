/* eslint-disable arrow-body-style */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { add } from '../../actions/index';

const BookForm = ({ addBook }) => {
  const [title, SetTitle] = useState('');
  const [categorie, setCategorie] = useState('Action');
  const handleForm = (event) => {
    const categorie = event.target.categorie.value;
    addBook({
      title,
      categorie,
    });
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <label htmlFor="title">
          Title
          <br />
          <input type="text" id="title" onChange={(e) => SetTitle(e.target.value)} />
        </label>
        <br />
        <label htmlFor="categorie">
          Categorie
          <br />
          <select id="categorie" value={categorie} onChange={(e) => setCategorie(e.target.value)}>
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
        <br />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => dispatch(add(book)),
  };
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);

/* eslint-enable arrow-body-style */
