import "../styles/DogCard.css";
import axios from "axios";
import { Dog } from "../utils/interfaces";
import { displayDogName } from "../utils/displayDogName";
import { useState } from "react";

interface Props {
  dogs: Dog[];
}

const baseUrl = process.env.REACT_APP_API_URL;

export default function DogCard(props: Props): JSX.Element {
  const { breed1, breed2 } = getRandomBreeds(props.dogs);

  const handleVote = async (breed: Dog | undefined) => {
    if (breed) {
      await axios.put(`${baseUrl}/${breed.id}`);
    }
  };

  function getRandomBreeds(dogArray: Dog[]) {
    let breed1;
    let breed2;
    if (dogArray.length > 0) {
      const num1 = Math.floor(Math.random() * dogArray.length);
      const num2 = Math.floor(Math.random() * dogArray.length);
      breed1 = dogArray[Math.floor(Math.random() * dogArray.length)];
      breed2 = dogArray[Math.floor(Math.random() * dogArray.length)];
      if (num1 === num2) {
        getRandomBreeds(props.dogs);
      }
    }
    return { breed1, breed2 };
  }

  function getRandomImage(breed: Dog) {
    const breedImages = breed.image.replaceAll(/[{}"]/g, "").split(",");
    return breedImages[Math.floor(Math.random() * breedImages.length)];
  }
  return (
    <div className="card-group">
      <div className="card">
        <img
          src={breed1 ? getRandomImage(breed1) : ""}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            Vote for {breed1 ? displayDogName(breed1.breed) : ""}
          </h5>
          <p className="card-text">
            <button onClick={() => handleVote(breed1)}>Vote</button>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src={breed2 ? getRandomImage(breed2) : ""}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            Vote for {breed2 ? displayDogName(breed2.breed) : ""}
          </h5>
          <p className="card-text">
            <button onClick={() => handleVote(breed2)}>Vote</button>
          </p>
        </div>
      </div>
    </div>
  );
}
