import React from "react";
import "./App.css";
import styled, { css } from "styled-components";
import { Heading } from "./Components/Heading.js";
import { Paragraph } from "./Components/Paragraph.js";
import { LogInPage } from "./Components/LogInPage.js";
import { Header } from "./Components/Header.js";
import { WhiteBox } from "./Components/WhiteBox";
import { Button } from "./Components/Button";
import UserImg from "./Images/User1.png";

function App() {
  return (
    <AppHolder>
      <Header />
      <Dashboard>
        <Categories>
          <Heading>Unanswered</Heading>
          <Decoration></Decoration>
          <Heading className="inactive-h">Answered</Heading>
        </Categories>
        <Flex>
          <QuestionPreview>
            <UserImage
              style={{ backgroundImage: `url(${UserImg})` }}
            ></UserImage>
            <span>Rosemary Wilson asks:</span>
            <Heading hstyle="light" color="black">
              Would you rather kiss a frog or...
            </Heading>
          </QuestionPreview>
          <QuestionPreview>
            <UserImage
              style={{ backgroundImage: `url(${UserImg})` }}
            ></UserImage>
            <span>Rosemary Wilson asks:</span>
            <Heading hstyle="light" color="black">
              Would you rather kiss a frog or...
            </Heading>
          </QuestionPreview>
          <QuestionPreview>
            <UserImage
              style={{ backgroundImage: `url(${UserImg})` }}
            ></UserImage>
            <span>Rosemary Wilson asks:</span>
            <Heading hstyle="light" color="black">
              Would you rather kiss a frog or...
            </Heading>
          </QuestionPreview>
          <QuestionPreview>
            <UserImage
              style={{ backgroundImage: `url(${UserImg})` }}
            ></UserImage>
            <span>Rosemary Wilson asks:</span>
            <Heading hstyle="light" color="black">
              Would you rather kiss a frog or...
            </Heading>
          </QuestionPreview>
        </Flex>
      </Dashboard>
    </AppHolder>
  );
}

const AppHolder = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #e86d5a;
`;

const Dashboard = styled.div`
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

const LeaderBoard = styled.div``;
const LeaderBox = styled.div`
  width: 100%;
  padding: 25px;
  border-radius: 6px;
  background-color: white;
  display: flex;
`;
const UserData = styled.div``;
const Place = styled.div`
  background-color: #f3c85a;
  padding: 5px 10px;
  border-radius: 50px;
  color: white;
`;
const Score = styled.div`
  width: 60px;
  height: 60px;
  background-color: #efefef;
  border-radius: 50%;
  color: #e86d5a;
`;

export default App;
