import React, { Component } from "react";
import * as BootstrapComponents from "react-bootstrap";

export default class NavBarWithHomeButton extends Component {
  handleEvent = event => {
    alert("You just clicked on the homebutton");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleEvent}>Home</button>
      </div>
    );
  }
}
