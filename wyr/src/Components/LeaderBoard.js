import React from "react";
import styled, { css } from "styled-components";
import { Button } from "./Button";
import { Heading } from "./Heading.js";
import { Paragraph } from "./Paragraph.js";
import UserImg from "../Images/User1.png";

export const LeaderBoard = () => {
  return (
    <LeaderBoardWrapper>
      <LeftSide>
        <Heading>Leaderboard</Heading>

        <LeaderBox>
          <UserImage style={{ backgroundImage: `url(${UserImg})` }}></UserImage>
          <UserData>
            <Paragraph color="black" weight="semi" size="big">
              Rosemary Wilson <Place>1st</Place>
            </Paragraph>
            <span>7 Asked 6 Answered</span>
          </UserData>
          <Score>
            <span>6</span>
            <span>points</span>
          </Score>
        </LeaderBox>
      </LeftSide>

      <RightSide>
        <img src={require("../Images/Illustration-LogIn.png")}></img>
      </RightSide>
    </LeaderBoardWrapper>
  );
};

const LeaderBoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;
const LeaderBox = styled.div`
  width: 100%;
  padding: 25px;
  border-radius: 6px;
  background-color: white;
  display: flex;
  max-width: 470px;
`;
const UserImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
  margin-right: 15px;
`;
const UserData = styled.div``;
const Place = styled.p`
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
