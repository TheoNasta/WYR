import React from "react";
import styled from "styled-components";

export const QuestionResults = ({ question, votedFor }) => {
  const votes =
    question?.optionOne.votes.length + question?.optionTwo.votes.length;

  const renderQuestion = (number) => {
    const percentage = question?.[number].votes.length / votes;
    return (
      <Option>
        <OptionText>
          <span>{question[number].text}</span>
          {votedFor === number && (
            <span style={{ color: "red" }}>Your Answer</span>
          )}
        </OptionText>
        <OptionGraph>
          <OptionColored
            style={{ width: `${percentage * 100}%` }}
          ></OptionColored>
          <span>{formatPercent(percentage)} %</span>
        </OptionGraph>
      </Option>
    );
  };
  return (
    <>
      {renderQuestion("optionOne")}
      {renderQuestion("optionTwo")}
    </>
  );
};

const formatPercent = (percent) => {
  return Math.floor(percent * 100);
};

const Option = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px 0;
`;
const OptionText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const OptionGraph = styled.div`
  background-color: #ececec;
  width: 100%;
  height: 50px;
  position: relative;
  border-radius: 50px;
  margin-top: 10px;

  span {
    color: white;
    position: absolute;
    left: 20px;
    top: 18px;
  }
`;

const OptionColored = styled.div`
  background-color: #595d7a;
  height: 50px;
  position: absolute;
  border-radius: 50px;
`;
