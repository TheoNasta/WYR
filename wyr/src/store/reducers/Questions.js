import {
  LOAD_QUESTIONS_START,
  LOAD_QUESTIONS_COMPLETE,
  ANSWER_QUESTION_START,
  ANSWER_QUESTION_COMPLETE,
  NEW_QUESTION_COMPLETE,
  NEW_QUESTION_START,
  RESET_ADD_QUESTION_FORM,
} from "../actions/Questions";

export function QuestionsActionsReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_QUESTIONS_START:
      return Object.assign({}, state, {
        questions: {
          ...state.questions,
          loading: "started",
        },
      });
    case LOAD_QUESTIONS_COMPLETE:
      return Object.assign({}, state, {
        questions: {
          ...state.questions,
          loading: "done",
          list: {
            ...action.questions,
          },
        },
      });
    case ANSWER_QUESTION_START:
      return Object.assign({}, state, {
        questions: {
          ...state.questions,
          list: {
            ...state.questions?.list,
            [action.qid]: {
              ...state.questions?.list?.[action.qid],
              loading: "start",
            },
          },
        },
      });
    case ANSWER_QUESTION_COMPLETE:
      return Object.assign({}, state, {
        questions: {
          ...state.questions,
          list: {
            ...state.questions?.list,
            [action.qid]: {
              ...state.questions?.list?.[action.qid],
              loading: "done",
              [action.answer]: {
                ...state.questions?.list?.[action.qid]?.[action.answer],
                votes: [
                  ...state.questions?.list?.[action.qid]?.[action.answer]
                    ?.votes,
                  action.authUser,
                ],
              },
            },
          },
        },
      });
    case NEW_QUESTION_START:
      return Object.assign({}, state, {
        questions: {
          ...state.questions,
          addingNewQuestion: "start",
        },
      });
    case NEW_QUESTION_COMPLETE:
      return Object.assign({}, state, {
        questions: {
          ...state.questions,
          addingNewQuestion: "done",
          list: {
            ...state.questions?.list,
            [action.formattedQuestion.id]: {
              ...action.formattedQuestion,
            },
          },
        },
      });
    case RESET_ADD_QUESTION_FORM:
      return Object.assign({}, state, {
        questions: {
          ...state.questions,
          addingNewQuestion: undefined,
        },
      });
    default:
      return state;
  }
}
