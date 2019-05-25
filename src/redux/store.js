import { createStore, combineReducers } from "redux";
import { routeReducer, userDataReducer } from "./reducers";

const reducer = combineReducers({
  route: routeReducer,
  users: userDataReducer
});

export const store = createStore(reducer);
