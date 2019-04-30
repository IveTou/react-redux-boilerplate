import { ADD_ARTICLE, FOUND_BAD_WORD } from '../constants/action-types';

const initialState = {
  articles: [],
  articlesErr: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: state.articles.concat(action.payload),
        articlesErr: null,
      }
    case FOUND_BAD_WORD:
      return {
        ...state,
        articlesErr: action.err,
      }
    default:
      return state
  }
};
export default rootReducer;