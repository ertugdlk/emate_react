import React from "react";
import Header from "./common/Header";
import Board from "./Board";
import styled, { createGlobalStyle } from "styled-components";

import { Route, Switch } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #505e62;
  }
`;

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <Header />
        </div>
        <Board />
        <GlobalStyle />
      </>
    );
  }
}

export default App;

//<Route path="/" exact component={HomePage} />
