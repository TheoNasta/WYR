import React from "react";
import styled, { css } from "styled-components";

export const Button = ({ children, BtnStyle, ...prop }) => {
  return (
    <StyledBtn {...prop} BtnStyle={BtnStyle}>
      {children}
    </StyledBtn>
  );
};

const StyledBtn = styled.div`
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  background-color: #e86d5a;
  padding: 15px 30px;
  border-radius: 50px;
  cursor: pointer;

  ${(p) =>
    p.BtnStyle === "Option" &&
    css`
      background-color: #ececec;
      color: black;
      margin: 0 10px;
    `}
`;
