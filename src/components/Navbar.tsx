/* displays the top level of the app with 'Dog factor' */

interface Props {
  count: number;
}
export default function Navbar(props: Props): JSX.Element {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container justify-content-center">
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            🐩 DOG FACTOR
          </a>
          <p className="navbar-brand">You've given {props.count} treats</p>
        </nav>
      </div>
    </nav>
  );
}
