import { useState, useEffect } from "react";
import axios from "axios";
import DogPicker from "./components/DogPicker";
import Navbar from "./components/Navbar";
import { Dog } from "./utils/interfaces";
import dogBreeds from "../src/dogBreeds.json";
function App(): JSX.Element {
  const [dogs, setDogs] = useState<Dog[]>([]);

  function getDogBreeds(): string[] {
    const dogArray: string[] = [];
    for (const [key, value] of Object.entries(dogBreeds.message)) {
      if (value.length !== 0) {
        for (const subbreed of value) {
          dogArray.push(`${key}-${subbreed}`);
        }
      } else {
        dogArray.push(key);
      }
    }
    return dogArray;
  }

  function getRandomBreeds(dogArray: string[]) {
    let breed1 = "";
    let breed2 = "";

    while (breed1 === breed2) {
      breed1 = dogArray[Math.floor(Math.random() * dogArray.length)];
      breed2 = dogArray[Math.floor(Math.random() * dogArray.length)];
    }

    return [breed1, breed2];
  }

  const dogArray = getDogBreeds();
  const [breed1, breed2] = getRandomBreeds(dogArray);

  const getRandomDogs = async () => {
    let res = await axios.get(
      `https://dog.ceo/api/breed/${breed1.replace("-", "/")}/images/random`
    );
    setDogs((dogs) => [...dogs, { breed: breed1, img: res.data.message }]);

    res = await axios.get(
      `https://dog.ceo/api/breed/${breed2.replace("-", "/")}/images/random`
    );
    setDogs((dogs) => [...dogs, { breed: breed2, img: res.data.message }]);
  };
  useEffect(() => {
    getRandomDogs();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <DogPicker dogs={dogs} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
