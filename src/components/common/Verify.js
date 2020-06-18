import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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

const Label = styled.label`
  color: #fff;
`;

class Verify extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Token: "",};   
        this.updateInput = this.updateInput.bind(this)
      }

    updateInput(event) {
        this.setState({ Token: event.target.value });
      }
    
    handleSubmit() {
      axios.post(`http://localhost:3000/users/emailactivate`, { token : this.state.Token })
      .then(res => {             
          alert(res.data.msg);
          console.log(res.data.msg);
        })
    }  

    render() {
      return (
          <Window>
            <Label>
                Enter your email verification token:
                <input
                  type="text"
                  placeholder="Token"
                  name="Token"
                  onChange={this.updateInput}
                  required
                ></input>
              </Label>
              <button onClick={() => this.handleSubmit()}> Verify Email</button>
          </Window>
      );
    }
  }
  
  export default Verify;