import React, { Component } from "react";

class ListViewer extends Component {
  render() {
    if (this.props.users && this.props.users.length) {
      console.log(this.props.users);
      return (
        <React.Fragment>
          <ol>
            {this.props.users.map((user, index) => (
              <li key={index}> {user.name} </li>
            ))}
          </ol>
        </React.Fragment>
      );
    } else {
      return <React.Fragment>No Users Found!</React.Fragment>;
    }
  }
}

export default ListViewer;
