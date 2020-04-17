import React from "react";
import styled, { css } from "styled-components";
import { Button } from "./Button";
import { Heading } from "./Heading.js";
import { Paragraph } from "./Paragraph.js";
import UserImg from "./Images/User1.png";

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
        <img src={require("./Images/Illustration-LogIn.png")}></img>
      </RightSide>
    </LeaderBoardWrapper>
  );
};
