import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { UsersActions } from "../store/actions/Users";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UsersActionsReducer.loggedInUser);

  if (!user) return null;
  return (
    <StyledHeader>
      <Nav>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              {" "}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/add">
              {" "}
              New Question{" "}
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/leaderboard">
              {" "}
              Leaderboard{" "}
            </NavLink>
          </li>
        </ul>
      </Nav>
      <Logout
        onClick={() => {
          dispatch(UsersActions.logout({}));
        }}
      >
        {" "}
        {user.name} / Logout
      </Logout>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 90vw;
  margin: 0px auto;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  position: relative;

  .active {
    font-weight: 700;
    text-decoration: underline;
  }
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

    li a {
      font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue",
        "Helvetica", "Arial", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
      cursor: pointer;
      text-decoration: none;
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
