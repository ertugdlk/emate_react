import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Window = styled.div`
  position: absolute;
  width: 300px;
  height: 400px;
  left: 40%;
  top: 130px;
  background: #161616;
  border-radius: 12px;
  z-index: 3;
`;
const LoginButton = styled.button`
  position: absolute;
  width: 150px;
  height: 35px;
  border-radius: 29.5px;
  text-align: center;
  color: #fff;

  margin-left: -75%;
  margin-top: 300px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  color: #fff;
  background-color: #555555;
  border: 0 solid;
  &:hover {
    background-color: gray;
  }
`;

const Modal = styled.div`
  box-sizing: border-box;
  font-size: 14px;
  width: 15px;
  margin-left: 25%;
  margin-top: 100px;

  position: absolute;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
`;

const Label = styled.label`
  color: #fff;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.updateInput = this.updateInput.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  updateInput(event) {
    this.setState({ email: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit() {
    alert("Bilgileriniz " + this.state.email + " " + this.state.password);
  }

  render() {
    return (
      <>
        <Window>
          <Modal>
            <form>
              <Label>
                Email:
                <input
                  type="text"
                  placeholder="Email"
                  name="Email"
                  onChange={this.updateInput}
                  required
                ></input>
              </Label>
              <Label>
                Password:
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="Password"
                  onChange={this.updatePassword}
                  required
                ></input>
              </Label>
            </form>
          </Modal>
          <LoginButton onClick={() => this.handleSubmit()}> Login</LoginButton>
        </Window>
      </>
    );
  }
}

export default Login;
