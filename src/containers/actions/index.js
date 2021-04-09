/* eslint-disable arrow-body-style */

export const add = (book) => {
  return {
    type: 'CREATE_BOOK',
    book,
  };
};

export const remove = (book) => {
  return {
    type: 'REMOVE_BOOK',
    book,
  };
};

/* eslint-enable arrow-body-style */
