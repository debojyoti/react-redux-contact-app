import React, { Component } from "react";

class ListViewer extends Component {
  render() {
    if (this.props.users && this.props.users.length) {
      return (
        <React.Fragment>
          <ol>
            <li>Logitech G106 keyboard</li>
            <li>AOC 15' monitor</li>
            <li>HDMI adaptor</li>
          </ol>
        </React.Fragment>
      );
    } else {
      return <React.Fragment>No Users Found!</React.Fragment>;
    }
  }
}

export default ListViewer;
