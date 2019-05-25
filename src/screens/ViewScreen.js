import React, { Component } from "react";
import Button from "../components/Button";
import SearchBar from "../containers/SearchBar";

class ViewScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar /> <br />
        <Button text="Add new user" isPressed={this.addButtonPressed} />
      </React.Fragment>
    );
  }
  addButtonPressed = () => {
    console.log("pressed");
  };
}

export default ViewScreen;
