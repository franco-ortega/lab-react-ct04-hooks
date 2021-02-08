import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import CharacterDetails from '../characters/CharacterDetails';

export default function App() {
  return (
    <Router>
      <h1>Animal Crossing Characters</h1>
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route exact path="/character/:id" component={CharacterDetails} />
      </Switch>
    </ Router>
  );
}
