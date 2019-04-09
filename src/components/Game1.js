import React, { Component } from 'react'
import * as request from "superagent";

export default class Game1 extends Component {
  state ={dogBreeds:null}
  
  updateImages(image) {
    console.log(image)
    this.setState({dogBreeds : image,
    breed: image[0].split('/')[4]})
  }

  componentDidMount(){
    request
        .get('https://dog.ceo/api/breeds/image/random/1').then(response=> {
        console.log(response.body.message);  
        this.updateImages(response.body.message)
        })
  }

showAnswer = () => {
  this.setState({
    showAnswer: true
  })
}


  render() {
    console.log(this.state);
    return (
      <div>
        <img alt="dog" src={this.state.dogBreeds}/>
        <input type="text" id="input" />
        <button onClick={this.showAnswer}>Show answer</button>
        {this.state.showAnswer && <h1>{this.state.breed}</h1>}
      </div>
    
      )
  }
}
