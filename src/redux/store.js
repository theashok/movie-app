import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root.reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

let middleWares = [logger, thunk];
let store = createStore(rootReducer, applyMiddleware(...middleWares));
export { store };
