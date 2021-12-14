import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Dog } from "./utils/interfaces";
import DogCard from "./components/DogCard";
import Leaderboard from "./components/Leaderboard";

function App(): JSX.Element {
  const [dogs, setDogs] = useState<Dog[]>([]);

  const getDogs = async () => {
    const res = await axios.get(`https://dog-proj.herokuapp.com/`);
    setDogs(res.data);
  };

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-9">
            <DogCard dogs={dogs} />
          </div>
          <div className="col-md-3">
            <Leaderboard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
