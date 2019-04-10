import React, { Component } from 'react'
import {Link}from 'react-router-dom'

// to delete later on: 
export default class LandingPage extends Component {
  render() {
    return (
      <div>
       {/*<Link to="/dogs" ><button>Training</button></Link>*/}
       <Link to="/game1" ><button>Game 1</button></Link>
      </div>
    )
  }
}
