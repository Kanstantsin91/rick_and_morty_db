import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/characters">Characters</Link>
      <Link to="/episodes">Episodes</Link>
      <Link to="/locations">Locations</Link>
    </div>
  );
};

export default Nav;
