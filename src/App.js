import React, { Component } from "react";
import "./App.css";
import DogsListContainer from "./components/DogsListContainer";
import { Route } from "react-router-dom";
import DogBreedImagesContainer from "./components/DogBreedImagesContainer";
import NavBarWithHomeButton from "./components/NavBarWithHomeButton";
import { Provider } from "react-redux";
import store from "./store";
import LandingPage from "./components/LandingPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          
          <Route exact path="/dogs" component={DogsListContainer} />
          <Route
            path="/dog-breeds/:breed"
            component={DogBreedImagesContainer}
          />
          <Route exact path="/landingpage" component={LandingPage} />
        </Provider>
      </div>
    );
  }
}

export default App;
