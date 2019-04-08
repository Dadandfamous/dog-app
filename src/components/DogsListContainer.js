import React, { Component } from "react";
import { connect } from "react-redux";
import DogsList from "./DogsList";
import { getDogs, setDogs } from "../actions/dogs";

class DogsListContainer extends Component {
  componentDidMount() {
    this.props.getDogs();
  }

  state = {};

  render() {
    if (!this.props.dogs) return "Loading...";
    return <DogsList dogBreeds={this.props.dogs} />;
  }
}
const mapStateToProps = state => {
  return { dogs: state.dogs };
};

export default connect(
  mapStateToProps,
  { setDogs, getDogs }
)(DogsListContainer);
