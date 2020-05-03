export const LOGOUT = "LOGOUT";
export const SET_LOGGED_IN_USER = "SET_LOGGED_IN_USER";
export const LOAD_USERS_START = "LOAD_USERS_START";
export const LOAD_USERS_COMPLETE = "LOAD_USERS_COMPLETE";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";

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
  addUserAnswer: (authUser, qid, answer) => {
    return {
      type: ADD_USER_ANSWER,
      authUser,
      qid,
      answer,
    };
  },
  addUserQuestion: (authedUser, qid) => {
    return {
      type: ADD_USER_QUESTION,
      authedUser,
      qid,
    };
  },
  logout: () => {
    return {
      type: LOGOUT,
    };
  },
};
