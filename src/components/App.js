import React from "react";
// import { createGlobalStyle } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";

import Header from "./elements/Header";
import Home from "./Home";
import Movie from "./Movie";
import NotFound from "./NotFound";

import { Route, Switch } from "react-router-dom";

// const GlobalStyle = createGlobalStyle`
// body{
//   margin:0;
//   padding:0;
//   box-size: border-box;
// }

// `;

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/:mid'>
        <Movie />
      </Route>
      {/* <Route default>
        <NotFound />
      </Route> */}
      <GlobalStyle />
    </Switch>
  </>
);

export default App;
