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
    console.log("this.props test:", this.props)
    console.log('randomNum test:', randomNum)

    const correctAnswer = this.props.randomDogs.length && this.props.randomDogs[randomNum]

    if (!this.props.dogImages) {
      return "Loading...";
    } else {
      return (
        <div>
          {
            this.props.randomDogs.map(
              dog => <button key={dog.url}>
                <img
                  alt={dog === correctAnswer ? 'correct' : 'incorrect' }
                  // onClick={dog === correctAnswer ? this.sayGoodJob : this.sayBadJob }
                  src={dog.url}
                />
              </button>
            )
          }

          {console.log('fasfasdfasdsdfa',this.props.randomDogs[randomNum])}

          {
            <p>{correctAnswer && correctAnswer.url.split('/')[4] }</p>
          }
        </div>
      );
      }
  }
 }

//  function sayGoodJob() {
//    alert('good job')
//  }

//  function sayBadJob() {
//   alert('bad job')
// }
 console.log(this.props.randomDogs[1])

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