import React, { Component } from "react";
import DogBreedImages from "./DogBreedImages";
import { connect } from "react-redux";
import { getDogImages, setDogImages } from "../actions/dogImages";

class DogBreedImagesContainer extends Component {
  componentDidMount() {
    const breed = this.props.match.params.breed;
    this.props.getDogImages(breed);
  }

  state = {};

  render() {
    if (!this.props.dogImages) return "Loading...";
    return (
      <DogBreedImages
        name={this.props.match.params.breed}
        images={this.props.dogImages}
      />
    );
  }
}

const mapStateToProps = state => {
  return { dogImages: state.dogImages };
};

export default connect(
  mapStateToProps,
  { setDogImages, getDogImages }
)(DogBreedImagesContainer);
