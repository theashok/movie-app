// Register a user
import {
  GET_USER_INFO,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "./users.actionTypes";
import Axios from "axios";
import { setAuthToken } from "../../util/setAuthToken";
import { setAlert } from "../alert/alert.actions";

// register a user
let registerUser = (user, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
      let dataURL = "http://127.0.0.1:5000/users/register";
      let response = await Axios.post(dataURL, user);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
      dispatch(setAlert("Registration is Success", "success"));
      history.push("/");
    } catch (error) {
      console.log(error.response.data.errors);
      let errorList = error.response.data.errors;
      await errorList.forEach((alert) =>
        dispatch(setAlert(alert.msg, "danger"))
      );
      dispatch({ type: REGISTER_USER_FAILURE, payload: error });
    }
  };
};

// login a user
let loginUser = (user, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_USER_REQUEST });
      let dataURL = "http://127.0.0.1:5000/users/login";
      let response = await Axios.post(dataURL, user);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
      dispatch(setAlert("Login is Success", "success"));
      dispatch(getUserInfo()); // fetch the user information
      history.push("/movies/list");
    } catch (error) {
      console.log(error.response.data.errors);
      let errorList = error.response.data.errors;
      await errorList.forEach((alert) =>
        dispatch(setAlert(alert.msg, "danger"))
      );
      dispatch({ type: LOGIN_USER_FAILURE, payload: error });
    }
  };
};

let getUserInfo = () => {
  return async (dispatch) => {
    if (localStorage.token) {
      setAuthToken(localStorage.getItem("token"));
    }
    try {
      let response = await Axios.get("http://127.0.0.1:5000/users/");
      dispatch({ type: GET_USER_INFO, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

let logOut = (history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGOUT });
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };
};

export { loginUser, registerUser, getUserInfo, logOut };
