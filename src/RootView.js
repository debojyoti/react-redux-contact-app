import React, { Component } from "react";
import { connect } from "react-redux";
import ViewScreen from "./screens/ViewScreen";
import AddUserScreen from "./screens/AddUserScreen";
import RemoveUserScreen from "./screens/RemoveUserScreen";

class RootView extends Component {
  state = {};
  render() {
    let screen = "";
    switch (this.props.currentView) {
      case "ViewScreen":
        screen = <ViewScreen />;
        break;
      case "AddUserScreen":
        screen = <AddUserScreen />;
        break;
      case "RemoveUserScreen":
        screen = <RemoveUserScreen />;
        break;
    }
    return screen;
  }
}

const mapStateToProps = state => {
  return {
    currentView: state.route.currentView
  };
};

export default connect(
  mapStateToProps,
  null
)(RootView);
