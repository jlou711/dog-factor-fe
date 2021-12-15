import "../styles/Leaderboard.css";
import { Dog } from "../utils/interfaces";
import { displayDogName } from "../utils/displayDogName";
import { displayMedal } from "../utils/displayMedal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";

// passing in props for the leaderboard which is the top 10 dogs of type Dog array.
interface Props {
  leaderboardOfDogs: Dog[];
}

//baseUrl is a variable which is set to our heroku app url
const baseUrl = process.env.REACT_APP_API_URL;

export default function Leaderboard(props: Props): JSX.Element {
  /* sets the top 10 dogs in the leaderboard to an initial use state of "leaderboard" */
  const [leaderboard, setLeaderboard] = useState<Dog[]>(
    //top 10 dogs is stored in leaderboard of dogs which is passed in as props to the leaderboard.
    props.leaderboardOfDogs
  );

  /*when the refresh leaderboard icon is pressed, the useState is updated and stored in leaderboard*/
  const getLeaderboard = async () => {
    const res = await axios.get(`${baseUrl}/leaderboard`);
    setLeaderboard(res.data);
  };

  /* leaderboard is displayed in a table format and medal is displayed according leaderboard index (logic found in utils for display medals function) */
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">
            Dog Breed{" "}
            <FontAwesomeIcon
              icon={faSync}
              onClick={getLeaderboard}
              className="syncIcon"
              title="Click to refresh leaderboard"
            />
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
