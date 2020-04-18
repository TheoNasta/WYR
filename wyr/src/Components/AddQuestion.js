import React from "react";
import styled, { css } from "styled-components";
import { Button } from "./Button";
import { Heading } from "./Heading.js";
import { WhiteBox } from "./WhiteBox.js";

export const AddQuestion = () => {
  return (
    <NewQuestion>
      <WhiteBox>
        <span>Add new question:</span>
        <Heading hstyle="light" color="black">
          Would you rather
        </Heading>
        <input type="text" placeholder="Add option 1" name="option1"></input>
        <input type="text" placeholder="Add option 2" name="option2"></input>
        <Button BtnStyle="red">Publish</Button>
      </WhiteBox>
    </NewQuestion>
  );
};

const NewQuestion = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 150px;
`;
