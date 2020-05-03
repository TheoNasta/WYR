import {
  LOAD_USERS_COMPLETE,
  LOAD_USERS_START,
  LOGOUT,
  SET_LOGGED_IN_USER,
  ADD_USER_ANSWER,
  ADD_USER_QUESTION,
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
    case ADD_USER_ANSWER:
      return Object.assign({}, state, {
        users: {
          ...state.users,
          list: {
            ...state.users?.list,
            [action.authUser]: {
              ...state.users?.list?.[action.authUser],
              answers: {
                ...state.users?.list?.[action.authUser].answers,
                [action.qid]: action.answer,
              },
            },
          },
        },
      });
    case ADD_USER_QUESTION:
      return Object.assign({}, state, {
        users: {
          ...state.users,
          list: {
            ...state.users?.list,
            [action.authedUser]: {
              ...state.users?.list?.[action.authedUser],
              questions: [
                ...state.users?.list?.[action.authedUser].questions,
                action.qid,
              ],
            },
          },
        },
      });
    default:
      return state;
  }
}
