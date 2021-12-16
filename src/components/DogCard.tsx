import "../styles/DogCard.css";
import axios from "axios";
import { Dog } from "../utils/interfaces";
import { displayDogName } from "../utils/displayDogName";

interface Props {
  dogs: Dog[];
  handleNewDogs: () => void;
  handleUserCounter: () => void;
}

const baseUrl = process.env.REACT_APP_API_URL;

export default function DogCard(props: Props): JSX.Element {
  const handleVote = async (breed: Dog | undefined) => {
    if (breed) {
      await axios.put(`${baseUrl}/${breed.id}`);
      props.handleNewDogs();
      props.handleUserCounter();
    }
  };

  function getRandomImage(breed: Dog) {
    const breedImages = breed.image.replaceAll(/[{}"]/g, "").split(",");
    return breedImages[Math.floor(Math.random() * breedImages.length)];
  }
  return (
    <div className="card-group">
      <div className="card card-left">
        <img
          src={props.dogs[0] ? getRandomImage(props.dogs[0]) : ""}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {props.dogs[0] ? displayDogName(props.dogs[0].breed) : ""}
          </h5>
          <p className="card-text">
            <button
              className="btn custom-vote-button"
              onClick={() => handleVote(props.dogs[0])}
            >
              Give treat 🦴
            </button>
          </p>
        </div>
      </div>
      <div className="card card-right">
        <img
          src={props.dogs[1] ? getRandomImage(props.dogs[1]) : ""}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {props.dogs[1] ? displayDogName(props.dogs[1].breed) : ""}
          </h5>
          <p className="card-text">
            <button
              className="btn custom-vote-button"
              onClick={() => handleVote(props.dogs[1])}
            >
              Give treat 🦴
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
