import React from "react";
// import { createGlobalStyle } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";

import Header from "./elements/Header";
import Home from "./Home";

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
    <Home />
    <GlobalStyle />
  </>
);

export default App;
