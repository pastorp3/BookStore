import PropTypes from 'prop-types';
import './book.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';

const Book = ({
  id,
  title,
  category,
  remove,
}) => {
  const [percentage, setPercentage] = useState(0);
  const handleProgress = () => {
    if (percentage === 100) setPercentage(0);
    else setPercentage(percentage + 25);
  };
  return (
    <div id="container">
      <div className="left_container">
        <div className="category">{category}</div>
        <div className="book_title">{title}</div>
        <div className="author">Author</div>
        <div>
          <span className="link">Comments</span>
          <button type="button" className="button_link" onClick={() => remove(id)}>Remove</button>
          <span className="link">Edit</span>
        </div>
      </div>
      <div className="mid_container">
        <div className="progress_container">
          <CircularProgressbar value={percentage} text="" />
        </div>
        <div>
          <div className="progess">
            {percentage}
            %
          </div>
          <div className="completed">Completed</div>
        </div>
      </div>
      <div className="right_container">
        <div className="current_chapter">CURRENT CHAPTER</div>
        <div className="current_lesson">Chapter</div>
        <button className="update_progess" onClick={handleProgress} type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
