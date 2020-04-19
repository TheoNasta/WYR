import { UsersActions } from "../actions/Users";

const checkUserLoggedIn = () => {
  return function (dispatch, getState) {
    const loggedInUserJSON = localStorage.getItem("loggedInUser");
    if (loggedInUserJSON) {
      const loggedInUser = JSON.parse(loggedInUserJSON);
      dispatch(UsersActions.setLoggedInUser(loggedInUser));
    }
  };
};

const login = (user) => {
  return function (dispatch, getState) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    checkUserLoggedIn()(dispatch, getState);
  };
};

export const UserThunks = {
  login,
  checkUserLoggedIn,
};
