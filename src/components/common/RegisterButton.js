import React from "react";
import { NavLink, route } from "react-router-dom";
import styled from "styled-components";
import Login from "../Login";
import ReactDOM from "react-dom";

const Button = styled.button`
  font-size: 14px;
  line-height: 1.5715;
  position: relative;
  font-weight: 400;
  text-align: center;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  height: 32px;
  padding: 4px 15px;
  border-radius: 4px;
  color: #fff;
  top:-32px;
  left:85px;
  background-color: #555555;
  border: 0 solid;
  &:hover {
    background-color: gray;
  }
`;


class RegisterButton extends React.Component {
    render() {
      return (
        <div>
          <Button onClick={() => this.props.onClick()}>Register</Button>
        </div>
      );
    }
  }
  
  export default RegisterButton;