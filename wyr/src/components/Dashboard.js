import React, { useEffect } from "react";
import styled from "styled-components";
import { Heading } from "./Heading.js";
import UserImg from "../Images/User1.png";
import { useSelector, useDispatch } from "react-redux";
import { SharedThunks } from "../store/thunks/Shared.js";

export const Dashboard = () => {
  const questions = useSelector(
    (state) => state.SharedActionsReducer.questions
  );
  const dispatch = useDispatch();

  return (
    <DashboardWrapper>
      {questions?.loading == "started"
        ? "LOADING..."
        : JSON.stringify(questions)}
      <Categories>
        <Heading>Unanswered</Heading>
        <Decoration></Decoration>
        <Heading className="inactive-h">Answered</Heading>
      </Categories>
      <Flex>
        <QuestionPreview>
          <UserImage style={{ backgroundImage: `url(${UserImg})` }}></UserImage>
          <span>Rosemary Wilson asks:</span>
          <Heading hstyle="light" color="black">
            Would you rather kiss a frog or...
          </Heading>
        </QuestionPreview>
      </Flex>
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 150px;
`;

const Categories = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .inactive-h {
    opacity: 0.25;
  }
`;

const Decoration = styled.div`
  width: 7px;
  height: 7px;
  margin: 0 15px;
  border-radius: 50%;
  background-color: white;
  opacity: 0.25;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const QuestionPreview = styled.div`
  width: 29%;
  min-width: 220px;
  background-color: white;
  border-radius: 6px;
  padding: 30px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 1.5%;
  margin-right: 1.5%;

  span {
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #a9a9a9;
    margin-bottom: 10px;
  }
`;

const UserImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
  margin-right: 15px;
  margin-top: -66px;
  border: 3px solid #e86d5a;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const LeftSide = styled.div`
  width: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;
const RightSide = styled.div`
  width: 50%;
  background-size: cover;
  img {
    width: 50%;
    height: 100%;
    position: absolute;
    right: 0;
  }
`;
