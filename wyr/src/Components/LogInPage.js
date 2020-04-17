import React from "react";
import styled, { css } from "styled-components";
import { Heading } from "./Heading.js";
import { Paragraph } from "./Paragraph.js";
import { UserBox } from "./UserBox.js";

export const LogInPage = () => {
  return (
    <StyledLogIn>
      <LeftSide>
        <Heading>Would you rather?</Heading>
        <Paragraph>Choose User</Paragraph>
        <UserBox />
      </LeftSide>
      <RightSide>
        <img src={require("../Images/Illustration-LogIn.png")}></img>
      </RightSide>
    </StyledLogIn>
  );
};

const StyledLogIn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
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
