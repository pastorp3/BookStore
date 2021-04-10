/* eslint-disable no-return-assign */

const randomNum = () => Math.floor(Math.random() * 100);
const initialState = [
  {
    id: randomNum(),
    title: 'Test1',
    categorie: 'Action',
  },
  {
    id: randomNum(),
    title: 'Test2',
    categorie: 'Horror',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        {
          id: randomNum(),
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
