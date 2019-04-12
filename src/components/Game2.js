import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  setDogImages,
  getDogGameImage,
  getDogName
} from '../actions/dogImages'
import {getRandomDogs, displayMessage} from '../actions/dogs'

 class Game2 extends Component {
  state = {}
  
  componentDidMount() {
    this.props.getDogGameImage()
    this.props.getRandomDogs();
  }

  render() {

    let correctAnswer = this.props.randomDogs.length && this.props.randomDogs[randomNum]
    console.log(correctAnswer)
    if (!this.props.dogImages) {
      return "Loading...";
    } else {
      return (
        <div>
        <h1>Click on the right picture!</h1>
        {
          <h1><p>Do you recognize the {correctAnswer && correctAnswer.url.split('/')[4] }?</p></h1>
        }
          {
            this.props.randomDogs.map(
              dog => {
                const message = dog === correctAnswer
                  ? 'correct'
                  : 'incorrect'

                return <button
                  key={dog.url}
                  onClick={() => alert(`this is ${message}`)}
                >
                  <img
                    alt={message}
                    // onClick={console.log('this is ', this.props.randomDogs.img.alt)}
                    src={dog.url}
                  />
                </button>
              })
          }

          {console.log('Testing randomnum',this.props.randomDogs[randomNum])}

          
        </div>
      );
      }
  }
 }

const randomNum = Math.floor(Math.random() * 3) 


const mapStateToProps = state => {
  return {
    dogImages: state.dogImages,
    randomDogs: state.dogs.randomDogs
  };
};

export default connect(
  mapStateToProps,
  { 
    setDogImages,
    getDogGameImage,
    getDogName,
    getRandomDogs,
    displayMessage
  }
)(Game2);