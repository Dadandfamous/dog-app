import React, { Component } from "react";
import { Link } from "react-router-dom";

// import * as BootstrapComponents from "react-bootstrap";

export default class NavBarWithHomeButton extends Component {
  // handleEvent = () => {
  //   alert("You just clicked on the homebutton");
  // };

  render() {
    return (
      <div>
        <Link to="/dogs" ><button>Dogslist</button></Link>
      </div>
    );
  }
}
