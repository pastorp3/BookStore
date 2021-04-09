/* eslint-disable no-return-assign */

const initialState = [
  {
    id: 0,
    title: 'Test1',
    categorie: 'Action',
  },
  {
    id: 1,
    title: 'Test2',
    categorie: 'Horror',
  },
];

let lastId = 0;

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        {
          id: lastId += 1,
          title: action.book.title,
          categorie: action.book.categorie,
        },
      ];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export default bookReducer;

/* eslint-enable no-return-assign */
