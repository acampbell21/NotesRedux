import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import FetchNotes from './components/FetchNotes';
import NoMatch from './components/NoMatch';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/notes" component={FetchNotes} />
    <Route component={NoMatch} />
  </Switch>
)

export default App;
