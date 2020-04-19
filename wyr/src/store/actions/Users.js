export const LOGOUT = "LOGOUT";
export const SET_LOGGED_IN_USER = "SET_LOGGED_IN_USER";

export const UsersActions = {
  setLoggedInUser: (user) => {
    return {
      type: SET_LOGGED_IN_USER,
      user,
    };
  },
  logout: () => {
    return {
      type: LOGOUT,
    };
  },
};
