import React from "react";
import Header from "../Header";
import CharacterPage from "../CharacterPage";
import CharactersList from "../CharactersList";
import EpisodesList from "../EpisodesList"
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/characters">
            <CharactersList />
          </Route>
          <Route path="/episodes">
            <EpisodesList />
          </Route>
          <Route path='/character/:id'>
            <CharacterPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
