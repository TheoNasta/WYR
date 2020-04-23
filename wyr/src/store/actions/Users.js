export const LOGOUT = "LOGOUT";
export const SET_LOGGED_IN_USER = "SET_LOGGED_IN_USER";
export const LOAD_USERS_START = "LOAD_USERS_START";
export const LOAD_USERS_COMPLETE = "LOAD_USERS_COMPLETE";

export const UsersActions = {
  setLoggedInUser: (user) => {
    return {
      type: SET_LOGGED_IN_USER,
      user,
    };
  },
  loadUsersStart: () => {
    return {
      type: LOAD_USERS_START,
    };
  },
  loadUsersFinish: (users) => {
    return {
      type: LOAD_USERS_COMPLETE,
      users,
    };
  },
  logout: () => {
    return {
      type: LOGOUT,
    };
  },
};
