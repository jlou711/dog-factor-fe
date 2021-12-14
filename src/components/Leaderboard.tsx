import "../styles/Leaderboard.css";
import { Dog } from "../utils/interfaces";
import { displayDogName } from "../utils/displayDogName";
import { displayMedal } from "../utils/displayMedal";

interface Props {
  dogs: Dog[];
}

export default function Leaderboard(props: Props): JSX.Element {
  const sortedDogs = props.dogs
    .sort(function (a, b) {
      return b.votes - a.votes;
    })
    .slice(0, 10);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Dog Breed</th>
          <th scope="col">Votes</th>
        </tr>
      </thead>
      <tbody>
        {sortedDogs.map((dog, index) => {
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
