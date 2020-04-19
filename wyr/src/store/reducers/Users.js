import { LOGOUT, SET_LOGGED_IN_USER } from "../actions/Users";

export function UsersActionsReducer(state = {}, action) {
  switch (action.type) {
    case LOGOUT:
      return Object.assign({}, state, {
        loggedInUser: undefined,
      });
    case SET_LOGGED_IN_USER:
      return Object.assign({}, state, {
        loggedInUser: action.user,
      });
    default:
      return state;
  }
}
