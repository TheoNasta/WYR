import React from "react";
import styled, { css } from "styled-components";

export const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

const StyledHeading = styled.h1`
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 32px;
  color: #ffffff;
`;
