import Home from "../routes/Home";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header>
      <h1>{props.name}</h1>
      <div className="navbar">
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/animal">Animals</NavLink>
          </li>
          <li>
            <NavLink to="/birds">Birds</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
      <Home />
    </header>
  );
};
export default Header;
