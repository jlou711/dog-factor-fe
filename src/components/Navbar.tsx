/* displays the top level of the app with 'Dog factor' */
export default function Navbar(): JSX.Element {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container justify-content-center">
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            🐩 DOG FACTOR
          </a>
        </nav>
      </div>
    </nav>
  );
}
