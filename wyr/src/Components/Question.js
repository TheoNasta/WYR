import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Heading } from "./Heading.js";
import { WhiteBox } from "./WhiteBox.js";
import { useSelector, useDispatch } from "react-redux";
import { QuestionsThunks } from "../store/thunks/Questions.js";
import { QuestionResults } from "./QuestionResults";

export const Question = (props) => {
  const userId = useSelector(
    (state) => state.UsersActionsReducer.loggedInUser.id
  );
  const dispatch = useDispatch();
  const qID = props?.match?.params?.userID;
  const questions = useSelector(
    (state) => state.QuestionsActionsReducer.questions
  );
  const userList = useSelector((state) => state.UsersActionsReducer.users);

  if (questions?.loading === "started" || userList?.loading === "started")
    return <span>Loading...</span>;

  // Get avatar
  const question = questions.list[qID];
  if (!question)
    return (
      <QuestionWrapper>
        <span>Page not found</span>
      </QuestionWrapper>
    );
  const author = question.author;
  const userAvatar = userList?.list[author].avatarURL;

  // Find out if the questions is anwered or not
  const answered =
    question.optionOne.votes.includes(userId) ||
    question.optionTwo.votes.includes(userId);

  const renderUnansweredQuestion = () => {
    if (question.loading === "start") return <span>Loading</span>;
    return (
      <Options>
        <Button
          BtnStyle="Option"
          onClick={() =>
            dispatch(QuestionsThunks.answerQuestion(userId, qID, "optionOne"))
          }
        >
          {question.optionOne.text}
        </Button>
        <Button
          BtnStyle="Option"
          onClick={() =>
            dispatch(QuestionsThunks.answerQuestion(userId, qID, "optionTwo"))
          }
        >
          {question.optionTwo.text}
        </Button>
      </Options>
    );
  };

  const renderAnsweredQuestion = () => {
    return (
      <Results>
        Results:
        <QuestionResults
          question={question}
          votedFor={
            question.optionOne.votes.includes(userId)
              ? "optionOne"
              : "optionTwo"
          }
        />
      </Results>
    );
  };

  return (
    <QuestionWrapper>
      <WhiteBox>
        <img src={userAvatar} alt="user avatar" />
        <span>{question.author} asks:</span>
        <Heading hstyle="light" color="black">
          Would you rather
        </Heading>
        {!answered ? renderUnansweredQuestion() : renderAnsweredQuestion()}
      </WhiteBox>
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.div`
  margin-top: 100px;

  img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-size: cover;
    margin-right: 15px;
    margin-top: -106px;
    border: 3px solid #e86d5a;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Options = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Results = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
