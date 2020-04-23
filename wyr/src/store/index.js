import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { UsersActionsReducer } from "./reducers/Users";
import { QuestionsActionsReducer } from "./reducers/Questions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    UsersActionsReducer,
    QuestionsActionsReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
