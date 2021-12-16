/* displays the top level of the app with 'Dog factor' */
import "../styles/Navbar.css";

export default function Navbar(): JSX.Element {
  return (
    <nav className="navbar navbar-custom">
      <div className="container justify-content-center">
        <nav className="navbar">
          <h1 className="navbar-brand">
            THE DOG{" "}
            <img
              className="bones-logo"
              src="https://static.vecteezy.com/system/resources/previews/001/192/562/non_2x/x-bone-png.png"
              alt="bones"
            />{" "}
            FACTOR
          </h1>
        </nav>
      </div>
    </nav>
  );
}
