import "../styles/Leaderboard.css";
import { Dog } from "../utils/interfaces";
import { displayDogName } from "../utils/displayDogName";
import { displayMedal } from "../utils/displayMedal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";

interface Props {
  leaderboardOfDogs: Dog[];
  handleRefresh: () => void;
}

export default function Leaderboard(props: Props): JSX.Element {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">
            Dog Breed{" "}
            <FontAwesomeIcon icon={faSync} onClick={props.handleRefresh} />
          </th>
          <th scope="col">Votes</th>
        </tr>
      </thead>
      <tbody>
        {props.leaderboardOfDogs.map((dog, index) => {
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
