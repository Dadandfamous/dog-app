import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DogsList from "./DogsList";
import { getDogs, setDogs } from "../actions/dogs";


class DogsListContainer extends Component {
  componentDidMount() {
    this.props.getDogs();
  }
  state = {};

  render() {
    
    if (!this.props.dogs) return "Loading...";
    return <div>
    
    <Link to="/" ><button>Home</button></Link>
    
    <DogsList dogBreeds={this.props.dogs} />
  
    </div>
    
  }
}
const mapStateToProps = state => {
  return { dogs: state.dogs };
};

export default connect(
  mapStateToProps,
  { setDogs, getDogs }
)(DogsListContainer);
