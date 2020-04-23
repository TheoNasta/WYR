import React from "react";
import styled from "styled-components";
import { Heading } from "./Heading.js";
import { Paragraph } from "./Paragraph.js";
import { UserBox } from "./UserBox.js";
import { useDispatch, useSelector } from "react-redux";
import { UserThunks } from "../store/thunks/Users.js";

export const LogInPage = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.UsersActionsReducer.users);

  const onUserSelect = (u) => {
    dispatch(UserThunks.login(u));
  };

  return (
    <StyledLogIn>
      {userList?.loading === "done" ? (
        <>
          <LeftSide>
            <Heading>Would you rather?</Heading>
            <Paragraph>Choose User</Paragraph>
            <UserBox users={userList.list} selectUser={onUserSelect} />
          </LeftSide>
          <RightSide>
            <img
              src="Images/Illustration-LogIn.png"
              alt="login in illustration"
            ></img>
          </RightSide>
        </>
      ) : (
        "LOADING"
      )}
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
    top: 0;
    z-index: 1;
  }
`;
