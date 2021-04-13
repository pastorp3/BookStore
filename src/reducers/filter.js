/* eslint-disable no-unused-vars */

const initialState = 'All';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.book;
    default:
      return initialState;
  }
};

export default filterReducer;

/* eslint-enable */
