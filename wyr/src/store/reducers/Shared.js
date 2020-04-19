import { START_LOADING_USERS, FINISH_LOADING_USERS } from "../actions/Shared";

export function SharedActionsReducer(state = {}, action) {
  switch (action.type) {
    case START_LOADING_USERS:
      return Object.assign({}, state, {
        users: {
          loading: "started",
        },
      });
    case FINISH_LOADING_USERS:
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
