import React from "react";
import styled, { css } from "styled-components";
import { Button } from "./Button";
import { Heading } from "./Heading.js";
import { WhiteBox } from "./WhiteBox.js";
import UserImg from "./Images/User1.png";

export const Question = () => {
  return (
    <QuestionWrapper>
      <WhiteBox>
        <UserImage style={{ backgroundImage: `url(${UserImg})` }}></UserImage>
        <span>Rosemary Wilson asks:</span>
        <Heading hstyle="light" color="black">
          Would you rather
        </Heading>
        <Options>
          <Button BtnStyle="Option">Option 1</Button>
          <Button BtnStyle="Option">Option 1</Button>
        </Options>
      </WhiteBox>
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.div`
  margin-top: 100px;
`;
const Options = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const UserImage = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-size: cover;
  margin-right: 15px;
  margin-top: -66px;
  border: 3px solid #e86d5a;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;
