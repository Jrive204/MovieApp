import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';

import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound';

import { Route, Switch } from 'react-router-dom';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/:mid'>
        <Movie />
      </Route>
      <NotFound default />
    </Switch>
  </>
);

export default App;
