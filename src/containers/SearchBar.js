import React, { Component } from "react";
import InputField from "../components/InputField";

class SearchBar extends Component {
  state = {
    searchValue: ""
  };
  render() {
    return (
      <React.Fragment>
        <InputField
          onValueChange={newValue => this.handleNewValue(newValue)}
          value={this.state.searchValue}
          placeHolderText="Search Users"
        />
      </React.Fragment>
    );
  }
  handleNewValue = newValue => {
    this.setState({ searchValue: newValue });
  };
}

export default SearchBar;
