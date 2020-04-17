import React from "react";
import styled, { css } from "styled-components";

export const Paragraph = ({
  children,
  color = "white",
  size = "medium",
  weight = "normal",
}) => {
  return (
    <StyledParagraph color={color} size={size} weight={weight}>
      {children}
    </StyledParagraph>
  );
};

const StyledParagraph = styled.p`
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  margin:0;

  ${(p) =>
    p.color === "black" &&
    css`
      color: rgba(0, 0, 0, 1);
    `}
  ${(p) =>
    p.weight === "semi" &&
    css`
      font-weight: 600;
    `}
  
  ${(p) =>
    p.size === "big" &&
    css`
      font-size: 18px;
    `}
`;
