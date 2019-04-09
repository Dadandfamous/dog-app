import React, { Component } from 'react'
import * as request from "superagent";

export default class Game1 extends Component {
  state ={image:null,
  name: null}
  
  updateImages(image) {
    console.log(image)
    this.setState({image : image,
    breed: image[0].split('/')[4]})
    // console.log('hellllo',this.state.breed)
  }

  randomAnswers(name){
    console.log(Object.keys(name)[1]);
    let arr = []
      while(arr.length < 3){
      let r = Math.floor(Math.random()*77) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
      // this.setState({name: name[arr]})

      // mapping over the array of random numbers to make it an index of the array of the dogs
      const newArray = arr.map(nr => {
        return Object.keys(name)[nr]})
      console.log(newArray);
  }
}
  componentDidMount(){


      request
      .get('https://dog.ceo/api/breeds/list/all').then(response=> { 
      this.randomAnswers(response.body.message)
      })


    request
        .get('https://dog.ceo/api/breeds/image/random/1').then(response=> {
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
        <img alt="dog" src={this.state.image}/>
        <input type="text" id="input" />
        <button onClick={this.showAnswer}>Show answer</button>
        {this.state.showAnswer && <h1>{this.state.breed}</h1>}
      </div>
      )
  }
}
