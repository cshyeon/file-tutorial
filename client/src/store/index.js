import { createStore, combineReducers } from "redux";
import { friendReducer } from './miniApps';

const reducer = combineReducers({
  friend: friendReducer,
});

const store = createStore(reducer);
export default store;
