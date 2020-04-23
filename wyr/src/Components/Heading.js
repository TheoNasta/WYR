import React from "react";
import styled, { css } from "styled-components";

export const Heading = ({ children, hstyle, color, ...props }) => {
  return (
    <StyledHeading hstyle={hstyle} color={color} {...props}>
      {children}
    </StyledHeading>
  );
};

const StyledHeading = styled.h1`
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 32px;
  color: #ffffff;
  margin: 0;

  ${(p) =>
    p.hstyle === "light" &&
    css`
      font-weight: 400;
    `}
  
  ${(p) =>
    p.onClick &&
    css`
      cursor: pointer;
      transition: 0.3s ease all;
    `}

  ${(p) =>
    p.color === "black" &&
    css`
      color: black;
    `}
`;
