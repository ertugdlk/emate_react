import React from "react";
import Square from "./Square";
import styled from "styled-components";

const Boardrow = styled.div`
  z-index: 1;
`;

const Boardsize = styled.div`
  width: 903px;
`;

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    return (
      <>
        <Boardsize>
          <Boardrow>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </Boardrow>
          <Boardrow>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </Boardrow>
          <Boardrow>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </Boardrow>
          <Boardrow>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </Boardrow>
          <Boardrow>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </Boardrow>
        </Boardsize>
      </>
    );
  }
}

export default Board;
