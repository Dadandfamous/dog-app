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
    console.log(this.props.list)
    if (!this.props.list) return "Loading...";
    return <div>
    
    <Link to="/" ><button>Home</button></Link>
    
    <DogsList dogBreeds={this.props.list} />
  
    </div>
    
  }
}
const mapStateToProps = state => {
  return { list: state.list };
};

export default connect(
  mapStateToProps,
  { setDogs, getDogs }
)(DogsListContainer);
