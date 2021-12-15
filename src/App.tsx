import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Dog } from "./utils/interfaces";
import DogCard from "./components/DogCard";
import Leaderboard from "./components/Leaderboard";

const baseUrl = process.env.REACT_APP_API_URL;

function App(): JSX.Element {
  const [dogs, setDogs] = useState<Dog[]>();
  const [leaderboard, setLeaderboard] = useState<Dog[]>();

  const getDogs = async () => {
    const res = await axios.get(`${baseUrl}/random`);
    setDogs(res.data);
  };
  const getLeaderboard = async () => {
    const res = await axios.get(`${baseUrl}/leaderboard`);
    setLeaderboard(res.data);
  };

  useEffect(() => {
    getDogs();
    getLeaderboard();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          {dogs && (
            <div className="col-md-9">
              <DogCard dogs={dogs} handleNewDogs={getDogs} />
            </div>
          )}
          {leaderboard && (
            <div className="col-md-3">
              <Leaderboard
                leaderboardOfDogs={leaderboard}
                handleRefresh={getLeaderboard}
              />
            </div>
          )}
          {!dogs && <p>Loading...</p>}
        </div>
      </div>
    </>
  );
}

export default App;
