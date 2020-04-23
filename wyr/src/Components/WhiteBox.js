import React from "react";
import styled from "styled-components";

export const WhiteBox = ({ children }) => {
  return <Box>{children}</Box>;
};

const Box = styled.div`
  background-color: white;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 50px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #a9a9a9;
    margin-bottom: 10px;
  }

  h1 {
    margin-bottom: 50px;
  }
  input {
    width: 100%;
    max-width: 500px;
    background-color: #ececec;
    border: 0;
    border-radius: 6px;
    font-size: 18px;
    color: black;
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
    font-style: normal;
    padding: 15px 20px;
    margin-bottom: 15px;
  }
`;
