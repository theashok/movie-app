import Axios from "axios";
import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from "./movies.actionTypes";

// fetchAllMovies
let fetchAllMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_MOVIES_REQUEST });
      let dataURL = `http://127.0.0.1:5000/movies/list`;
      let response = await Axios.get(dataURL);
      dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_MOVIES_FAILURE, payload: error });
    }
  };
};

export { fetchAllMovies };
