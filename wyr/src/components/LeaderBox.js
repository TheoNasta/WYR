import React from "react";
import styled from "styled-components";
import { Paragraph } from "./Paragraph.js";

export const LeaderBox = ({ user, position }) => {
  const score = user.questions.length + Object.keys(user.answers).length;
  return (
    <LeaderBoxWrapper>
      <div>
        <img src={user.avatarURL} alt="user avatar" />
        <UserData>
          <div>
            <Paragraph color="black" weight="semi" size="big">
              {user.name}
            </Paragraph>
            <Place>{position + 1}</Place>
          </div>
          <span>
            {user.questions.length} Asked / {Object.keys(user.answers).length}{" "}
            Answered
          </span>
        </UserData>
      </div>
      <Score>
        <span>{score}</span>
        <span>points</span>
      </Score>
    </LeaderBoxWrapper>
  );
};

const LeaderBoxWrapper = styled.div`
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
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-size: cover;
    margin-right: 15px;
  }
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
