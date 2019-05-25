import React, { Component } from "react";
import Button from "../components/Button";
import SearchBar from "../containers/SearchBar";
import ListViewer from "../containers/ListViewer";
import { connect } from "react-redux";
import { changeCurrentView } from "../redux";

class ViewScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar /> <br />
        <Button text="Add new user" isPressed={this.addButtonPressed} />
        <div style={{ paddingTop: 20 }}>
          <ListViewer users={this.props.users} />
        </div>
      </React.Fragment>
    );
  }
  addButtonPressed = () => {
    this.props.addUser();
  };
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUser: () => dispatch(changeCurrentView("AddUserScreen"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewScreen);
