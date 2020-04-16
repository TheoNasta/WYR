import React from "react";
import styled, { css } from "styled-components";

export const Paragraph = ({ children, color = "white" }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

const StyledParagraph = styled.p`
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: rgba(255, 255, 255, 1);
`;
