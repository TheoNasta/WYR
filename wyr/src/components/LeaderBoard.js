import React from "react";
import styled from "styled-components";
import { Heading } from "./Heading.js";
import { useSelector } from "react-redux";
import { LeaderBox } from "./LeaderBox";

export const LeaderBoard = () => {
  const userList = useSelector((state) => state.UsersActionsReducer.users.list);
  const order = Object.keys(userList).sort((a, b) => {
    const scoreA =
      userList[a].questions.length + Object.keys(userList[a].answers).length;
    const scoreB =
      userList[b].questions.length + Object.keys(userList[b].answers).length;
    if (scoreA > scoreB) return -1;
    return 1;
  });
  return (
    <LeaderBoardWrapper>
      <LeftSide>
        <Heading>Leaderboard</Heading>
        {order.map((k, i) => {
          const user = userList[k];
          console.log("This user:" + user);
          return <LeaderBox user={user} position={i} key={k} />;
        })}
      </LeftSide>

      <RightSide>
        <img src={"Images/leaderboard.png"} alt="illustration"></img>
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
