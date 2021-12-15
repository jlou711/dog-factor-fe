import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Dog } from "./utils/interfaces";
import DogCard from "./components/DogCard";
import Leaderboard from "./components/Leaderboard";
import DogPodiumCarousel from "./components/DogPodiumCarousel";
import "./app.css";

//server URL where we make the requests

const baseUrl = process.env.REACT_APP_API_URL;

function App(): JSX.Element {
  const [dogs, setDogs] = useState<Dog[]>();
  const [counter, setCounter] = useState<number>(0);
  const [leaderboard, setLeaderboard] = useState<Dog[]>();

  /*async function which communicates with the backend at the "/random" endpoint gets the 2 dogs 
 and stores it in the "dogs" state variable (line 18) */
  const getDogs = async () => {
    const res = await axios.get(`${baseUrl}/random`);
    setDogs(res.data);
  };

  /*async function which communicates with the backend at the "/leaderboard" endpoint gets 10 dogs 
 and stores it in the "leaderboard" state variable (line 18) */
  const getLeaderboard = async () => {
    const res = await axios.get(`${baseUrl}/leaderboard`);
    setLeaderboard(res.data);
  };

  /* Calls useEffect which calls getDogs and getLeaderboard on the first render */
  useEffect(() => {
    getDogs();
    getLeaderboard();
  }, []);

  const handleUserCounter = () => {
    setCounter((prev) => prev + 1);
  };

  /* app split into 4 components/sections  using bootstrap for styling */
  /* Navbar - navbar displayed
  DogCard - checks if a dog exists before loading the 2 dog pictures 
  Leaderboard - checks if leaderboard has data in it before loading the leaderboard results
  Podium - podium maps over the leaderboard results and displays the first 3 dogs in the podium (logic for distinction between carousel in podium component*/
  return (
    <>
      <Navbar count={counter} />
      <div className="container mt-5">
        <div className="row">
          {dogs && (
            <div className="col-md-9">
              <DogCard
                dogs={dogs}
                handleNewDogs={getDogs}
                handleUserCounter={handleUserCounter}
              />
            </div>
          )}
          {leaderboard && (
            <div className="col-md-3">
              <h3 className="app-title">⭐️ Leaderboard ⭐️</h3>
              <Leaderboard leaderboardOfDogs={leaderboard} />
            </div>
          )}
          {!dogs && <p>Loading...</p>}
        </div>
        <div className="row">
          <h3 className="app-title">🏆 The Good Bois 🏆</h3>
          <div className="podium-container">
            {leaderboard &&
              leaderboard.slice(0, 3).map((dog, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <DogPodiumCarousel dog={dog} position={index} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
