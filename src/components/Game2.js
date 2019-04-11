import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setDogImages, getDogGameImage, getDogName } from '../actions/dogImages'
import {getRandomDogs} from '../actions/dogs'

 class Game2 extends Component {
  state ={}
  
  componentDidMount() {
    this.props.getDogGameImage()
    this.props.getRandomDogs();
  }




  render() {
    // console.log("this.props test:", this.props)
    if (!this.props.dogImages) return "Loading...";
    return (
    <div>
     
    {this.props.randomDogs.map(dog => <img alt='dog' src={dog.url} /> )}
    {
      <p>{this.props.randomDogs.length && this.props.randomDogs[randomNum].url.split('/')[4]} </p>
    }
    </div>
    );
  }
 }

 const randomNum = Math.floor(Math.random() * 3) 
 console.log('sdffsasfad',randomNum)

const mapStateToProps = state => {
  return {
    dogImages: state.dogImages,
    randomDogs: state.dogs.randomDogs
  };
};

export default connect(
  mapStateToProps,
  { setDogImages, getDogGameImage, getDogName, getRandomDogs }
)(Game2);