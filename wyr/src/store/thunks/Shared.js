import { SharedActions } from "../actions/Shared";
import { _getQuestions, _getUsers } from "../../_Data";

export const SharedThunks = {
  loadUsers: () => {
    return function (dispatch, getState) {
      dispatch(SharedActions.startLoadingUsers());
      _getUsers().then((users) => {
        dispatch(SharedActions.finishedLoadingUsers(users));
      });
    };
  },
  //   initStore: () => {
  //     return function (dispatch, getState) {
  //       dispatch(SharedActions.startInitStore());
  //       const promises = [_getUsers(), _getQuestions()];

  //       Promise.all(promises).then((result) => {
  //         dispatch(SharedActions.finishInitStore(result[0], result[1]));
  //       });
  //     };
  //   },
};
