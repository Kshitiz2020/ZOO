import Home from "../routes/Home";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header>
      <h1>{props.name}</h1>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/animal">Animals</Link>
          </li>
          <li>
            <Link to="/birds">Birds</Link>
          </li>
        </ul>
      </div>
      <Home />
    </header>
  );
};
export default Header;
