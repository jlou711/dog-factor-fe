import "../styles/DogPicker.css";
import { Dog } from "../utils/interfaces";

interface Props {
  dogs: Dog[];
}

export default function DogPicker(props: Props): JSX.Element {
  return (
    <div className="container-fluid dog-carousel">
      <div id="carouselDog" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselDog"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselDog"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={props.dogs[0] ? props.dogs[0].image[0] : ""}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <button onClick={() => console.log(props.dogs[0].breed)}>
                Vote for {props.dogs[0] ? props.dogs[0].breed : ""}
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={props.dogs[1] ? props.dogs[1].image[0] : ""}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <button onClick={() => console.log(props.dogs[1].breed)}>
                Vote for {props.dogs[1] ? props.dogs[1].breed : ""}
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselDog"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselDog"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
