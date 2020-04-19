export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const RECEIVE_DATA = "RECEIVE_DATA";

export const QuestionActions = {
  add: (question) => {
    return {
      type: ADD_QUESTION,
      question,
    };
  },
  answer: (answer, id) => {
    return {
      type: ANSWER_QUESTION,
      answer,
      id,
    };
  },
  receive: (questions) => {
    return {
      type: RECEIVE_DATA,
      questions,
    };
  },
};

// export function handleInitialData() {
//   return (dispatch) => {
//     return Promise.all([API.fetchQuestions()]).then(([questions]) => {
//       dispatch(ReceiveData(questions));
//     });
//   };
// }
