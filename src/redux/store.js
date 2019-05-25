import { createStore, combineReducers } from "redux";
import { routeReducer } from "./reducers";

const reducer = combineReducers({
  route: routeReducer
});

export const store = createStore(reducer);
