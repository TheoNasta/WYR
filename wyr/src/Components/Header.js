import React from "react";
import styled, { css } from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <ul>
          <li className="active">Home</li>
          <li>New Question</li>
          <li>Leaderboard</li>
        </ul>
      </Nav>
      <Logout>Logout</Logout>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 90vw;
  margin: 0px auto;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
`;
const Nav = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;

    li {
      font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue",
        "Helvetica", "Arial", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
      cursor: pointer;
      margin-right: 30px;
    }

    .active {
      font-weight: 700;
      text-decoration: underline;
    }
  }
`;

const Logout = styled.div`
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
