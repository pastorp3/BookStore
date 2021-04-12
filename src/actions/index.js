export const add = (book) => (
  {
    type: 'CREATE_BOOK',
    book,
  }
);

export const remove = (book) => (
  {
    type: 'REMOVE_BOOK',
    book,
  }
);

export const filter = (book) => (
  {
    type: 'CHANGE_FILTER',
    book,
  }
);
