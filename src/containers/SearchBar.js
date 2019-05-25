import React, { Component } from "react";
import InputField from "../components/InputField";

class SearchBar extends Component {
  render() {
    return (
      <React.Fragment>
        <InputField
          onValueChange={newValue => this.handleNewValue(newValue)}
          placeHolderText="Search Users"
        />
      </React.Fragment>
    );
  }
  handleNewValue = newValue => {
    console.log(newValue);
  };
}

export default SearchBar;
