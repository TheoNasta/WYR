import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled, { css } from "styled-components";
import { Heading } from "./Components/Heading.js";
import { Paragraph } from "./Components/Paragraph.js";

function App() {
  return (
    <AppHolder>
      <StyledLogIn>
        <LeftSide>
          <Heading>Would you rather?</Heading>
          <Paragraph>Choose User</Paragraph>
          <UserBox>
            <UserImage></UserImage>
            <UserData>
              <Paragraph>Rosemary Wilson</Paragraph>
              <span>Continue ></span>
            </UserData>
          </UserBox>
        </LeftSide>
        <RightSide></RightSide>
      </StyledLogIn>
    </AppHolder>
  );
}

const AppHolder = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-width: 100vh;
  background-color: #e86d5a;
`;
const StyledLogIn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const LeftSide = styled.div`
  width: 50%;
`;
const RightSide = styled.div`
  width: 50%;
  background-image: url("./Images/Illustration-LogIn.png");
  background-size: cover;
`;
const UserBox = styled.div`
  background-color: white;
  border-radius: 6px;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;
const UserImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: cover;
  background-image: url("./Images/User1.png");
  margin-left: 15px;
`;
const UserData = styled.div``;

export default App;
