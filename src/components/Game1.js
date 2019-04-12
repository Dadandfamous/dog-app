import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setDogImages,
  setRandomDogImage,
  getDogImages,
  getDogGameImage
} from "../actions/dogImages";
import {
  getDogs,
  setDogs,
  setAnswer,
  getAnswer,
  chooseAnswer
} from "../actions/dogs";

class Game1 extends Component {
  state = {};

  componentDidMount() {
    this.props.getAnswer();
  }

  render() {
    const dogNames = this.props.dogs1.array;
    if (!this.props.dogImages) return "Loading...";

    return (
      <div>
      <h1>Choose the right race for the picture!</h1>
        <img src={this.props.dogs1.url} alt="dog" />
        <br />

        {dogNames && dogNames.map(dog => <button key={dog}>{dog}</button>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { dogImages: state.dogImages, dogs1: state.dogs1 };
};

export default connect(
  mapStateToProps,
  {
    setDogImages,
    getDogImages,
    getDogGameImage,
    setRandomDogImage,
    setDogs,
    getDogs,
    getAnswer,
    setAnswer,
    chooseAnswer
  }
)(Game1);
