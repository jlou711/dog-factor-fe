import "../styles/Leaderboard.css";
import { Dog } from "../utils/interfaces";
import { displayDogName } from "../utils/displayDogName";
import { displayMedal } from "../utils/displayMedal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";

interface Props {
  leaderboardOfDogs: Dog[];
}

const baseUrl = process.env.REACT_APP_API_URL;

export default function Leaderboard(props: Props): JSX.Element {
  const [leaderboard, setLeaderboard] = useState<Dog[]>(
    props.leaderboardOfDogs
  );

  const getLeaderboard = async () => {
    const res = await axios.get(`${baseUrl}/leaderboard`);
    setLeaderboard(res.data);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">
            Dog Breed <FontAwesomeIcon icon={faSync} onClick={getLeaderboard} />
          </th>
          <th scope="col">Votes</th>
        </tr>
      </thead>
      <tbody>
        {leaderboard.map((dog, index) => {
          return (
            <tr key={dog.id}>
              <th scope="row" className="leaderboard-position">
                {displayMedal(index)}
                {index + 1}
              </th>
              <td>{displayDogName(dog.breed)}</td>
              <td className="leaderboard-votes">{dog.votes}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
