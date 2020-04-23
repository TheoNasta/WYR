import {
  LOAD_USERS_COMPLETE,
  LOAD_USERS_START,
  LOGOUT,
  SET_LOGGED_IN_USER,
} from "../actions/Users";

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
    case LOAD_USERS_START:
      return Object.assign({}, state, {
        users: {
          loading: "started",
        },
      });
    case LOAD_USERS_COMPLETE:
      return Object.assign({}, state, {
        users: {
          loading: "done",
          list: {
            ...action.users,
          },
        },
      });
    default:
      return state;
  }
}
