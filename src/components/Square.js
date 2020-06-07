import React from "react";
import styled from "styled-components";

const Window = styled.div`
  width: 301px;
  height: 209px;
  position: relative;
  float: left;
  top: 168px;
  left: 357px;
  padding: 0px;
  border: 1px solid #000000;
  box-sizing: border-box;
  text-align: center;
  z-index: 1;
`;

function Square(props) {
  return (
    <>
      <Window></Window>
    </>
  );
}

export default Square;
