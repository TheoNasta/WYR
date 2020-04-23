export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION_START = "ANSWER_QUESTION_START";
export const ANSWER_QUESTION_COMPLETE = "ANSWER_QUESTION_COMPLETE";
export const LOAD_QUESTIONS_START = "LOAD_QUESTIONS_START";
export const LOAD_QUESTIONS_COMPLETE = "LOAD_QUESTIONS_COMPLETE";
export const NEW_QUESTION_START = "NEW_QUESTION_START";
export const NEW_QUESTION_COMPLETE = "NEW_QUESTION_COMPLETE";
export const RESET_ADD_QUESTION_FORM = "RESET_ADD_QUESTION_FORM";

export const QuestionsActions = {
  loadQuestionsStart: () => {
    return {
      type: LOAD_QUESTIONS_START,
    };
  },
  loadQuestionsComplete: (questions) => {
    return {
      type: LOAD_QUESTIONS_COMPLETE,
      questions,
    };
  },
  newQuestionStart: (newQuestion) => {
    return {
      type: NEW_QUESTION_START,
      newQuestion,
    };
  },
  newQuestionComplete: (formattedQuestion) => {
    return {
      type: NEW_QUESTION_COMPLETE,
      formattedQuestion,
    };
  },
  answerQuestionStart: (qid) => {
    return {
      type: ANSWER_QUESTION_START,
      qid,
    };
  },
  resetAddQuestionForm: () => {
    return {
      type: RESET_ADD_QUESTION_FORM,
    };
  },
  answerQuestionComplete: (authUser, qid, answer) => {
    return {
      type: ANSWER_QUESTION_COMPLETE,
      authUser,
      qid,
      answer,
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
