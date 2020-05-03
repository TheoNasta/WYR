import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Heading } from "./Heading.js";
import { WhiteBox } from "./WhiteBox.js";
import { useDispatch, useSelector } from "react-redux";
import { QuestionsThunks } from "../store/thunks/Questions";
import { Link } from "react-router-dom";
import { QuestionsActions } from "../store/actions/Questions";

export const AddQuestion = () => {
  const dispatch = useDispatch();
  const userId = useSelector(
    (state) => state.UsersActionsReducer.loggedInUser.id
  );
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const isQuestionSubmitted = useSelector(
    (state) => state.QuestionsActionsReducer.questions.addingNewQuestion
  );

  useEffect(() => {
    dispatch(QuestionsActions.resetAddQuestionForm());
  }, [dispatch]);

  const renderForm = () => {
    if (isQuestionSubmitted === "start") return <span> Loading...</span>;
    if (isQuestionSubmitted === "done")
      return (
        <>
          <span> Question submitted!</span>
          <Link to="/">Back to Home</Link>
        </>
      );

    return (
      <>
        <span>Add new question:</span>
        <Heading hstyle="light" color="black">
          Would you rather
        </Heading>
        <input
          type="text"
          placeholder="Add option 1"
          name="option1"
          onChange={(e) => {
            setOptionOne(e.currentTarget.value);
          }}
        />
        <input
          type="text"
          placeholder="Add option 2"
          name="option2"
          onChange={(e) => {
            setOptionTwo(e.currentTarget.value);
          }}
        />
        {optionOne}
        <Button
          BtnStyle="red"
          onClick={() => {
            dispatch(
              QuestionsThunks.addQuestion({
                optionOneText: optionOne,
                optionTwoText: optionTwo,
                author: userId,
              })
            );
          }}
        >
          Publish
        </Button>
      </>
    );
  };
  return (
    <NewQuestion>
      <WhiteBox>{renderForm()}</WhiteBox>
    </NewQuestion>
  );
};

const NewQuestion = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 150px;
`;
