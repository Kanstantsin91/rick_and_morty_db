import React from "react";
import { Link } from "react-router-dom";
import './Location.css';

const Location = (props) => {
  const { id, name } = props;
  return (
      <div className="Location">
        <img src={require("../../images/planet.png")} alt="planet" width="40px" height="40px"/>
        <Link to={`location/${id}`}>{name}</Link>
      </div>
  );
};

export default Location;
