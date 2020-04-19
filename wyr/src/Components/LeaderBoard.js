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
          <div>
            <UserImage
              style={{ backgroundImage: `url(${UserImg})` }}
            ></UserImage>
            <UserData>
              <div>
                <Paragraph color="black" weight="semi" size="big">
                  Rosemary Wilson
                </Paragraph>
                <Place>1st</Place>
              </div>
              <span>7 Asked 6 Answered</span>
            </UserData>
          </div>
          <Score>
            <span>6</span>
            <span>points</span>
          </Score>
        </LeaderBox>
      </LeftSide>

      <RightSide>
        <img src={require("../Images/leaderboard.png")}></img>
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
  padding: 15px 25px;
  border-radius: 6px;
  background-color: white;
  display: flex;
  max-width: 470px;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  div {
    display: flex;
  }
`;
const UserImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
  margin-right: 15px;
`;
const UserData = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
    color: #a9a9a9;
    margin-top: 7px;
  }
`;
const Place = styled.p`
  background-color: #f3c85a;
  font-size: 12px;
  padding: 3px 10px;
  border-radius: 50px;
  color: white;
  margin: 0;
  margin-left: 10px;
`;
const Score = styled.div`
  width: 60px;
  height: 60px;
  background-color: #efefef;
  border-radius: 50%;
  color: #e86d5a;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    display: block;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;
const RightSide = styled.div`
  width: 50%;
  background-size: cover;
  z-index: 0;

  img {
    width: 50%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
  }
`;
