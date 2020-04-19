import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { SharedActionsReducer } from "./reducers/Shared";
import { UsersActionsReducer } from "./reducers/Users";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({ SharedActionsReducer, UsersActionsReducer }),
  composeEnhancers(applyMiddleware(thunk))
);
