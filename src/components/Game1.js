import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setDogImages, getDogGameImage } from '../actions/dogImages'

 class Game1 extends Component {
  state ={}
  
  componentDidMount() {
    this.props.getDogGameImage();
  }

  render() {
    if (!this.props.dogImages) return "Loading...";
    return (
      
      <img src={this.props.dogImages} alt='dog' />

      // <img src={this.state.dogImages} alt='dog'/>
    );
  }
 }

const mapStateToProps = state => {
  return { dogImages: state.dogImages };
};

export default connect(
  mapStateToProps,
  { setDogImages, getDogGameImage }
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




