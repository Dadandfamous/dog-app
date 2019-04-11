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

// updateImages(image) {
// console.log(image)
// this.setState({image : image,
// breed: image[0].split('/')[4]})
// console.log('hellllo',this.state.breed)

// randomAnswers = (name) => {
//   console.log(Object.keys(name)[1]);
//   let arr = []
//     while(arr.length < 2){
//     let r = Math.floor(Math.random()*77);
//     if(arr.indexOf(r) === -1) arr.push(r);
//     // this.setState({name: name[arr]})

//     // mapping over the array of random numbers to make it an index of the array of the dogs
//     const newArray = arr.map(nr => {
//       return Object.keys(name)[nr]})
//     console.log(newArray);
//     // wrongDogs.push(newArray[0])
//     wrongDogs.push(newArray)
//     // wrongDogs.push(newArray[0])
// }

// showAnswer = () => {
//   this.setState({
//     showAnswer: true
//   })
// }
