import React, { Component } from "react";
import { connect } from "react-redux";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { changeCurrentView, addNewUser } from "../redux";

class AddUserScreen extends Component {
  state = {
    newUserName: ""
  };
  render() {
    return (
      <React.Fragment>
        <InputField
          placeHolderText="Name of new user"
          onValueChange={value => this.setState({ newUserName: value })}
          value={this.state.newUserName}
        />
        <Button text="Add User" isPressed={() => this.addNewUser()} />
        <br />
        <Button text="<< Back" isPressed={() => this.goBackToViewScreen()} />
      </React.Fragment>
    );
  }

  addNewUser = () => {
    this.props.addNewUser(this.state.newUserName);
    this.setState({ newUserName: "" });
    this.goBackToViewScreen();
  };

  goBackToViewScreen = () => {
    this.props.loadViewScreen();
  };
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loadViewScreen: () => dispatch(changeCurrentView("ViewScreen")),
    addNewUser: userName => dispatch(addNewUser(userName))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserScreen);
