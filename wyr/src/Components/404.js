import React from "react";
import styled from "styled-components";

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Background>
        <svg
          viewBox="0 0 1168 542"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1168 542.399C1009.5 542.399 922.998 542.399 494 542.399C126.5 542.399 108.5 542.399 0 542.399C0 413.274 0 198.5 0 67.4106C116.851 48.4232 291.96 50.4988 553.448 85.2045C708.613 105.799 961.751 36.2079 1168 0C1168 224.399 1168 291.399 1168 542.399Z"
            fill="#F5E7E4"
          />
        </svg>
      </Background>
      <Span404>404</Span404>
      <SpanText>Ups, the page you’re looking for could not be found.</SpanText>
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Background = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  bottom: 0;

  svg {
    margin-top: 100px;
    width: 100vw;
    bottom: 0;
    position: absolute;
  }
`;
const Span404 = styled.p`
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 300px;
  line-height: 358px;
  color: #ffffff;
  text-align: center;
  z-index: 9;
  margin: 0;
`;
const SpanText = styled.p`
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 31px;
  line-height: 136.6%;
  text-align: center;
  color: #000000;
  z-index: 9;
`;
