import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import { LogInPage } from "./components/LogInPage.js";
import { Header } from "./components/Header.js";
import { Dashboard } from "./components/Dashboard.js";
import { AddQuestion } from "./components/AddQuestion.js";
import { Question } from "./components/Question.js";
import { LeaderBoard } from "./components/LeaderBoard.js";
import { useSelector, useDispatch } from "react-redux";
import { UserThunks } from "./store/thunks/Users";
import { QuestionsThunks } from "./store/thunks/Questions";
import { NotFound } from "./components/404";

function App() {
  const user = useSelector((state) => state.UsersActionsReducer.loggedInUser);
  const dispatch = useDispatch();
  // const questions = useSelector(
  //   (state) => state.QuestionsActionsReducer.questions
  // );
  // const users = useSelector((state) => state.UsersActionsReducer.users);

  useEffect(() => {
    // if (questions?.loading !== "done" && users?.loading !== "done") {
    dispatch(QuestionsThunks.loadQuestions());
    dispatch(UserThunks.loadUsers());
    // }
  }, [dispatch]);

  return (
    <Router>
      <AppHolder>
        <Header />
        <Switch>
          {user ? (
            [
              <Route exact path="/" key="dashboard">
                <Dashboard />
              </Route>,
              <Route exact path="/add" key="question">
                <AddQuestion />
              </Route>,
              <Route path="/leaderboard" key="leaderboard">
                <LeaderBoard />
              </Route>,
              <Route exact path="/404" key="notfound">
                <NotFound />
              </Route>,
              <Route
                path="/questions/:userID"
                component={Question}
                key="question"
              />,
              <Redirect from="*" to="/404" key="redirect" />,
            ]
          ) : (
            <Route path="/" key="login">
              <LogInPage />
            </Route>
          )}
        </Switch>
      </AppHolder>
    </Router>
  );
}

const AppHolder = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #e86d5a;
`;

export default App;
