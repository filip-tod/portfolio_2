import { Link } from "react-router";

function Nav() {
  return (
       <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/map">Map</Link>
        <Link to="/pomodoro">Pomodoro</Link>
      </nav>
  );
}   

export default Nav;