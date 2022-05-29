import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from "./movies.actionTypes";

export const MOVIES_FEATURE_KEY = "movies";

let initialState = {
  loading: false,
  movies: [],
  errorMessage: "",
};

let moviesReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: payload,
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
export { moviesReducer };
