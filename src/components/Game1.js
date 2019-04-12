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
    const url = this.props.dogs1.url
    

    // console.log(url)
    if (!this.props.dogImages){
      return "Loading...";
    } else {
    return (
      <div>
      <h1>Choose the right breed for the picture!</h1>
        <img src={this.props.dogs1.url} alt="dog" />
        <br />

        {dogNames && dogNames.map(dog => {
          if (typeof url !== 'string')  {return 'loading...'} 
          else { 
          const correctAnswer = 
          url && url.split('/')[4]
          const message = dog === correctAnswer
                  ? 'correct'
                  : 'incorrect'

          return <button onClick={() => alert(`this is ${message}`)} key={dog}>{dog}</button>}})
        }
      </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    dogImages: state.dogImages,
    dogs1: state.dogs1
  };
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
