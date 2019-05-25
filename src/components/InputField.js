import React, { Component } from "react";

class InputField extends Component {
  state = {
    currentValue: ""
  };
  componentWillReceiveProps = () => {
    this.setState({ currentValue: this.props.initalValue });
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
        value={this.props.value}
      />
    );
  }
  updateValue = currentValue => {
    this.props.onValueChange(currentValue);
  };
}

export default InputField;
