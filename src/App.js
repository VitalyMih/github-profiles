import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Alert from "./components/Alert/Alert";
import AlertState from "./context/alert/alertState";
import {GithubState} from "./context/github/githubState";

function App() {
  return (
      <GithubState>
          <AlertState>
              <BrowserRouter>
                  <Navbar />
                  <div className="App_container">
                      <Alert />
                      <Switch>
                          <Route path="/" exact component={Home} />
                          <Route path="/about" component={About} />
                          <Route path="/profile/:name" component={Profile} />
                      </Switch>
                  </div>
              </BrowserRouter>
          </AlertState>
      </GithubState>
  );
}

export default App;