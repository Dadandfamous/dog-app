import React from "react";
import { Link } from "react-router-dom";

export default function DogBreedImages(props) {
  const images = props.images;

  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>
      This page will show off the {props.name} breed.
      <Link to="/dogs">Go back to the index</Link>
      <div>
        {images && images.map(url => <img key={url} src={url} alt="Dog" className="dogpicture"/>)}
        {!images && "Loading..."}
      </div>
    </div>
  );
}
