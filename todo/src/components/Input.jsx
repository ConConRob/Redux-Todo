import React from "react";
import styled from "styled-components";

const StyledFormInput = styled.input`
  width: 100px;
`;

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInputValue: ""
    };
  }
  handleInputChange = event => {
    this.setState({ currentInputValue: event.target.value });
  };
  submit = event => {
    event.preventDefault();
    this.props.submitFunction(this.state.currentInputValue);
    this.setState({ currentInputValue: "" });
  };
  render() {
    return (
      <form>
        <StyledFormInput
          onChange={this.handleInputChange}
          value={this.state.currentInputValue}
        />
        <button onClick={this.submit}>Submit</button>
      </form>
    );
  }
}
