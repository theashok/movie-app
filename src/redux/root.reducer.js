import { combineReducers } from "redux";
import { MOVIES_FEATURE_KEY, moviesReducer } from "./movies/movies.reducer";
import { USERS_FEATURE_KEY, userReducer } from "./users/users.reducer";
import { ALERT_FEATURE_KEY, alertReducer } from "./alert/alert.reducer";

let rootReducer = combineReducers({
  [MOVIES_FEATURE_KEY]: moviesReducer,
  [USERS_FEATURE_KEY]: userReducer,
  [ALERT_FEATURE_KEY]: alertReducer,
});

export { rootReducer };
