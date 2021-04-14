/* eslint-disable arrow-body-style */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { add } from '../../actions/index';
import './booksForm.css';

const BookForm = ({ addBook }) => {
  const [title, SetTitle] = useState('');
  const [categorie, setCategorie] = useState('Action');
  const handleForm = (event) => {
    addBook({
      title,
      categorie,
    });
    event.preventDefault();
  };

  return (
    <div className="main_container">
      <div className="form_container">
        <div className="add_book">ADD NEW BOOK</div>
        <form onSubmit={handleForm}>
          <label htmlFor="title">
            <input type="text" id="title" className="bookTitle" placeholder="Book Title" onChange={(e) => SetTitle(e.target.value)} />
          </label>
          <br />
          <label htmlFor="categorie">
            <select id="categorie" onChange={(e) => setCategorie(e.target.value)}>
              <option value="Action">Category</option>
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
          <input type="submit" className="button" value="Add Book" />
        </form>
      </div>
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
