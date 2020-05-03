import { QuestionsActions } from "../actions/Questions";
import { UsersActions } from "../actions/Users";
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../../_Data";

export const QuestionsThunks = {
  loadQuestions: () => {
    return function (dispatch, getState) {
      dispatch(QuestionsActions.loadQuestionsStart());
      _getQuestions().then((questions) => {
        dispatch(QuestionsActions.loadQuestionsComplete(questions));
      });
    };
  },
  addQuestion: (newQuestion) => {
    return function (dispatch, getState) {
      dispatch(QuestionsActions.newQuestionStart());
      _saveQuestion(newQuestion).then((formattedQuestion) => {
        dispatch(QuestionsActions.newQuestionComplete(formattedQuestion));
        console.log(formattedQuestion);
        dispatch(
          UsersActions.addUserQuestion(
            formattedQuestion.author,
            formattedQuestion.id
          )
        );
      });
    };
  },
  answerQuestion: (authedUser, qid, answer) => {
    return function (dispatch, getState) {
      dispatch(QuestionsActions.answerQuestionStart(qid));
      _saveQuestionAnswer({ authedUser, qid, answer }).then((questions) => {
        dispatch(
          QuestionsActions.answerQuestionComplete(authedUser, qid, answer)
        );
        dispatch(UsersActions.addUserAnswer(authedUser, qid, answer));
      });
    };
  },
};
