import React, { Component } from "react";
import "./App.css";
import DogsListContainer from "./components/DogsListContainer";
import { Route } from "react-router-dom";
import DogBreedImagesContainer from "./components/DogBreedImagesContainer";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Route exact path="/" component={DogsListContainer} />
          <Route
            path="/dog-breeds/:breed"
            component={DogBreedImagesContainer}
          />
        </Provider>
      </div>
    );
  }
}

export default App;
