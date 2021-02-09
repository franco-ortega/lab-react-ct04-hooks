import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import OneCharacter from '../characters/OneCharacter';

export default function App() {

  return (
    <Router>
      <h1>Animal Crossing Characters</h1>
      <Switch>
        <Route
          exact path="/"
          component={CharacterList}
          // {...characters}
        />
        <Route
          exact path="/character/:id"
          component={OneCharacter}
          // {...characters}
        />
      </Switch>
    </ Router>
  );
}
