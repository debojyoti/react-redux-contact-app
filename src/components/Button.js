import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button onClick={() => this.props.isPressed()}>{this.props.text}</button>
    );
  }
}

export default Button;
