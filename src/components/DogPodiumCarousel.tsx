import "../styles/DogCarousel.css";
import { Dog } from "../utils/interfaces";
import { displayDogName } from "../utils/displayDogName";
import { displayMedal } from "../utils/displayMedal";

interface Props {
  dog: Dog;
  position: number;
}


export default function DogPodiumCarousel(props: Props): JSX.Element {
  /*accessing image from the dog object that is being passed in via App.tsx 
  and we are using regex to put it into a cleaner format */
  const breedImages = props.dog.image.replaceAll(/[{}"]/g, "").split(",");

  /* dog podium carousel 
  - line 21 makes each carousel unique "carouselDog${props.position}" which allows for distinct arrows to slide through each distinct carousel
  - looping through each image and creating a distinct carousel for each.
  */ 
  return (
    <div className="container-fluid dog-carousel">
      <div
        id={`carouselDog${props.position}`}
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {breedImages.map((image, index) => {
            if (index === 0) {
              return (
                <button
                  key={index}
                  type="button"
                  data-bs-target={`#carouselDog${props.position}`}
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                data-bs-target={`#carouselDog${props.position}`}
                data-bs-slide-to={index}
                aria-label={`Slide ${index + 1}`}
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner">
          {breedImages.map((image, index) => {
            if (index === 0) {
              return (
                <div className="carousel-item active" key={index}>
                  <img src={image} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <p>
                      {displayMedal(props.position)}
                      {displayDogName(props.dog.breed)}
                    </p>
                  </div>
                </div>
              );
            }
            return (
              <div className="carousel-item" key={index}>
                <img src={image} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <p>
                    {displayMedal(props.position)}
                    {displayDogName(props.dog.breed)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#carouselDog${props.position}`}
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
          data-bs-target={`#carouselDog${props.position}`}
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
