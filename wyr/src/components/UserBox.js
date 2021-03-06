import React from "react";
import styled from "styled-components";
import { Paragraph } from "./Paragraph.js";

export const UserBox = ({ users, selectUser }) => {
  return Object.keys(users).map((k) => {
    const u = users[k];
    return (
      <UserBoxHolder
        key={k}
        onClick={() => {
          selectUser(u);
        }}
      >
        <UserImage
          style={{ backgroundImage: `url(${u.avatarURL})` }}
        ></UserImage>
        <UserData>
          <Paragraph color="black" weight="semi" size="big">
            {u.name}
          </Paragraph>
          <span>Continue ></span>
        </UserData>
      </UserBoxHolder>
    );
  });
};

const UserBoxHolder = styled.div`
  background-color: white;
  border-radius: 6px;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
  width: 300px;
  cursor: pointer;
  transition: 0.2s all ease-in;

  &:hover {
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.08);
  }

  span {
    font-size: 14px;
    color: #a9a9a9;
  }
`;
const UserImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
  margin-right: 15px;
`;
const UserData = styled.div``;
