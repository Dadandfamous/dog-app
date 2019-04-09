import React, { Component } from "react";
import "./App.css";
import DogsListContainer from "./components/DogsListContainer";
import { Route } from "react-router-dom";
import DogBreedImagesContainer from "./components/DogBreedImagesContainer";
// import NavBarWithHomeButton from "./components/NavBarWithHomeButton";
import { Provider } from "react-redux";
import store from "./store";
import LandingPage from "./components/LandingPage";
import Game1 from "./components/Game1";
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
        <Link to="/dogs" ><button>Training</button></Link>
          <Route exact path="/dogs" component={DogsListContainer} />
          <Route
            path="/dog-breeds/:breed"
            component={DogBreedImagesContainer}
          />
          <Route exact path="/landingpage" component={LandingPage} />
          <Route exact path="/game1" component={Game1} />
        </Provider>
      </div>
    );
  }
}

export default App;
