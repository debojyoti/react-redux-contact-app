import React, { Component } from "react";

class InputField extends Component {
  state = {
    currentValue: ""
  };
  render() {
    return (
      <input
        type="text"
        placeholder={
          this.props.placeHolderText
            ? this.props.placeHolderText
            : "Input Field"
        }
        onChange={event => this.updateValue(event.currentTarget.value)}
        value={this.state.currentValue}
      />
    );
  }
  updateValue = currentValue => {
    this.setState({ currentValue }, this.emitChange);
  };
  emitChange = () => {
    this.props.onValueChange(this.state.currentValue);
  };
}

export default InputField;
