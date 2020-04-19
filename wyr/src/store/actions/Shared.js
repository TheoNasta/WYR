export const START_LOADING_USERS = "START_LOADING_USERS";
export const FINISH_LOADING_USERS = "FINISH_LOADING_USERS";

export const SharedActions = {
  startLoadingUsers: () => {
    return {
      type: START_LOADING_USERS,
    };
  },
  finishedLoadingUsers: (users) => {
    return {
      type: FINISH_LOADING_USERS,
      users,
    };
  },
};
