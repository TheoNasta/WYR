import { UsersActions } from "../actions/Users";
import { _getUsers } from "../../_Data";

export const UserThunks = {
  loadUsers: () => {
    return function (dispatch, getState) {
      dispatch(UsersActions.loadUsersStart());
      _getUsers().then((users) => {
        dispatch(UsersActions.loadUsersFinish(users));
      });
    };
  },
  login: (user) => {
    return function (dispatch, getState) {
      dispatch(UsersActions.setLoggedInUser(user));
    };
  },
};
