import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NewNote from "./containers/NewNote";
import NotFound from "./containers/NotFound";
import Signup from "./containers/Signup";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoutes";


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <UnauthenticatedRoute path="/login">
            <Login />
          </UnauthenticatedRoute>
          <UnauthenticatedRoute path="/signup">
            <Signup />
            </UnauthenticatedRoute>          <Route exact path="/settings">
              <Settings />
          </Route>
          <AuthenticatedRoute exact path="/notes/new">
              <NewNote />
            </AuthenticatedRoute>
          <AuthenticatedRoute exact path="/notes/:id">
              <Notes />
              </AuthenticatedRoute>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}