import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import styled, { css } from "styled-components";
import { LogInPage } from "./components/LogInPage.js";
import { Header } from "./components/Header.js";
import { Dashboard } from "./components/Dashboard.js";
import { AddQuestion } from "./components/AddQuestion.js";
import { LeaderBoard } from "./components/LeaderBoard.js";
import { useSelector, useDispatch } from "react-redux";
import { UserThunks } from "./store/thunks/Users";

function App() {
  const user = useSelector((state) => state.UsersActionsReducer.loggedInUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserThunks.checkUserLoggedIn());
  }, []);

  return (
    <Router>
      <AppHolder>
        <Header />
        <Switch>
          {user ? (
            <>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route exact path="/addNew">
                <AddQuestion />
              </Route>
              <Route path="/leaderboard">
                <LeaderBoard />
              </Route>{" "}
            </>
          ) : (
            <Route path="/">
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
