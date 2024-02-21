import Home from "../routes/Home";
import Search from "./Search";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = (props) => {
  const [showSearchBar, setShowSearchBar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/animals" || location.pathname === "/birds") {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
    }
  });
  return (
    <header>
      <h1>{props.name}</h1>

      <div className="navbar">
        <div>{showSearchBar && <Search />}</div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/animals">Animals</NavLink>
          </li>
          <li>
            <NavLink to="/birds">Birds</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
