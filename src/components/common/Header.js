import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LoginButton from "./LoginButton";
import Login from "../Login";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import RegisterButton from "./RegisterButton";
import Register from "../Register";

const NavHeader = styled.div`
  display: absolute ;
  background-color: #161616;
  align-items: center;
  padding: 10px 150px;
  height: 40px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 4;
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
    this.state = { isOpen: false , isShow: false };
  }

  renderLoginPage() {
    if (this.state.isOpen === true) {
      return <Login></Login>;
    }
  }

  renderRegisterPage() {
    if (this.state.isShow === true) {
      return <Register></Register>;
    }
  }

  handleClickAway = () => {
    this.setState({ isOpen: false , isShow: false });
  };

  render() {
    return (
      <>
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <NavHeader>
            <NavLeft></NavLeft>
            <NavCenter></NavCenter>
            <NavRight>
              <LoginButton onClick={() => this.setState({ isOpen: true , isShow: false})}>
                Login
              </LoginButton>
              <RegisterButton onClick={() => this.setState({ isShow: true , isOpen : false})}></RegisterButton>
              {this.state.isOpen ? <Login></Login> : null}
              {this.state.isShow ? <Register></Register> : null}
            </NavRight>
          </NavHeader>
        </ClickAwayListener>
      </>
    );
  }
}

export default Header;
