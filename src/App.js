import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import LoginPage from "./modules/LoginPage/LoginPage";
import SignUpPage from "./modules/SignUp/SignUpPage";
import HomePage from "./modules/HomePage/HomePage";
import LeaguesPage from "./modules/Leagues/LeaguesPage";
import PlayersPage from "./modules/Players/PlayersPage";
import EventsPage from "./modules/Events/EventsPage";

import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./state/store";
import { ProtectedRoute } from "./api/ProtectedRoute";
import { PersistGate } from "redux-persist/integration/react";
import { checkToken } from "./api/checkToken";

import CreateNewLeague from "./modules/Leagues/CreateNewLeague";

function Providers() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  );
}

function App() {
  const user = useSelector((state) => state.user);

  let token = undefined
  if(user.user) {
    token = user.token
  }

  const history = useHistory();

  useEffect(() => {
    if (!token) {
      return;
    }

    async function fn() {
      const data = await checkToken(token);

      if (data.error) {
        history.push("/login");
      } else {
        const route = window.location.pathname

        if(route === "/login" || route === "/register") {
          history.push("/");
        }
      }
    }
    fn();
    // eslint-disable-next-line
  }, []);

  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/signUp">
        <SignUpPage />
      </Route>
      <ProtectedRoute exact path="/">
        <HomePage />
      </ProtectedRoute>
      <ProtectedRoute exact path="/myLeagues">
        <LeaguesPage />
      </ProtectedRoute>
      <ProtectedRoute exact path="/myLeagues/createNewLeague">
        <CreateNewLeague />
      </ProtectedRoute>
      <ProtectedRoute exact path="/leagues/:id/players">
        <PlayersPage />
      </ProtectedRoute>
      <ProtectedRoute exact path="/leagues/:id/events">
        <EventsPage />
      </ProtectedRoute>
      <Route path="*">
        <h1>404 - page not found</h1>
      </Route>
    </Switch>
  );
}

export default Providers;
