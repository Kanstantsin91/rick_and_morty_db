import React from "react";
import "./App.css";
import Header from "../Header";
import CharactersList from "../CharactersList";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import EpisodesList from "../EpisodesList";
import CharacterPage from "../CharacterPage";
import EpisodePage from "../EpisodePage";
import StartPage from "../StartPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
        <Switch>
          <Route exact path="/"><StartPage/>
          </Route> 
          <Route path="/characters">
            <CharactersList />
          </Route>
          <Route path="/episodes">
            <EpisodesList />
          </Route>
          <Route path={`/character/:id`}>
            <CharacterPage />
          </Route>
          <Route path={`/episode/:id`}>
            <EpisodePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
