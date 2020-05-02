import React, { useState } from "react";
import styled from "styled-components";
import { Heading } from "./Heading.js";
import { QuestionPrev } from "./QuestionPrev.js";
import { useSelector } from "react-redux";

export const Dashboard = () => {
  const userId = useSelector(
    (state) => state.UsersActionsReducer.loggedInUser.id
  );
  const questions = useSelector(
    (state) => state.QuestionsActionsReducer.questions
  );

  const userList = useSelector((state) => state.UsersActionsReducer.users);
  const [filter, setFilter] = useState("unanswered");

  Object.keys(questions.list).forEach((k) => {
    questions.list[k].date = new Date(questions.list[k].timestamp);
  });

  const answered = questions?.list && filterQuestions(questions, true, userId);
  const unanswered =
    questions?.list && filterQuestions(questions, false, userId);
  const shownQuestions = filter === "answered" ? answered : unanswered;

  return (
    <DashboardWrapper>
      {questions?.loading === "done" &&
      userList?.loading === "done" &&
      shownQuestions ? (
        <>
          <Categories>
            <Heading
              className={filter === "answered" && "inactive-h"}
              onClick={
                filter === "answered"
                  ? () => setFilter("unanswered")
                  : undefined
              }
            >
              Unanswered ({unanswered.length})
            </Heading>
            <Decoration></Decoration>
            <Heading
              className={filter === "unanswered" && "inactive-h"}
              onClick={
                filter === "unanswered"
                  ? () => setFilter("answered")
                  : undefined
              }
            >
              Answered ({answered.length})
            </Heading>
          </Categories>
          <Flex>
            {shownQuestions.map((k) => {
              const q = questions.list[k];
              console.log("This question:" + q);
              return (
                <QuestionPrev
                  question={q}
                  avatar={userList?.list[q.author].avatarURL}
                  key={k}
                />
              );
            })}
          </Flex>
        </>
      ) : (
        "LOADING..."
      )}
    </DashboardWrapper>
  );
};

const filterQuestions = (questions, shouldIncludeAnswered, userId) => {
  return Object.keys(questions.list)
    .sort((a, b) => {
      const dateA = questions.list[a].date;
      const dateB = questions.list[b].date;
      if (dateA > dateB) return -1;
      return 1;
    })
    .filter((k) => {
      const q = questions.list[k];
      if (
        q.optionOne.votes.includes(userId) ||
        q.optionTwo.votes.includes(userId)
      )
        return shouldIncludeAnswered;
      return !shouldIncludeAnswered;
    });
};

const DashboardWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 150px;
`;

const Categories = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .inactive-h {
    opacity: 0.25;
  }
`;

const Decoration = styled.div`
  width: 7px;
  height: 7px;
  margin: 0 15px;
  border-radius: 50%;
  background-color: white;
  opacity: 0.25;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
