import React from "react";
import styled from "styled-components";
import { Heading } from "./Heading.js";
import { Link } from "react-router-dom";

export const QuestionPrev = ({ question, avatar }) => {
  return (
    <QuestionPrevHolder>
      <Link to={`/questions/${question.id}`}>
        <img src={avatar} alt="user avatar" />
        <span>{question.author} asks:</span>
        <Heading hstyle="light" color="black">
          Would you rather {question.optionOne.text} or...
        </Heading>
      </Link>
    </QuestionPrevHolder>
  );
};
const QuestionPrevHolder = styled.div`
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

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
  }

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

  img {
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
  }
`;
