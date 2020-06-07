import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LoginButton from "./LoginButton";
import Login from "../Login";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const NavHeader = styled.div`
  display: flex;
  background-color: #161616;
  align-items: center;
  padding: 10px 150px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

const NavLeft = styled.div`
  width: 100%;
  text-align: left;
`;
const NavCenter = styled.div`
  width: 100%;
  text-align: center;
`;

const NavRight = styled.div`
  width: 100%;
  text-align: right;
`;

class Header extends React.Component {
  constructor() {
    super();
    this.state = { isOpen: false };
  }

  renderLoginPage() {
    if (this.state.isOpen === true) {
      return <Login></Login>;
    }
  }

  handleClickAway = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <>
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <NavHeader>
            <NavLeft></NavLeft>
            <NavCenter></NavCenter>
            <NavRight>
              <LoginButton onClick={() => this.setState({ isOpen: true })}>
                Login
              </LoginButton>
              {this.state.isOpen ? <Login></Login> : null}
            </NavRight>
          </NavHeader>
        </ClickAwayListener>
      </>
    );
  }
}

export default Header;
