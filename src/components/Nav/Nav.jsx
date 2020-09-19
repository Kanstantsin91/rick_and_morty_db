import React from "react";
import { NavLink } from "react-router-dom";
//import './Nav.css';
import styles from "./Nav.styles";
import {
  setCharactersThunk,
  setEpisodesThunk,
} from "../../actions/setCharectersAction";
import { connect } from "react-redux";

export let target = null;

const Nav = (props) => {
  const classes = styles();

  return (
    <div className={`Nav ${classes.Nav}`}>
      <NavLink
        activeStyle={{ color: "black" }}
        onClick={() => props.setCharacters()}
        to="/characters"
      >
        Characters
      </NavLink>
      <NavLink
        activeStyle={{ color: "black" }}
        onClick={() => props.setEpisodes()}
        to="/episodes"
      >
        Episodes
      </NavLink>
      <NavLink activeStyle={{ color: "black" }} to="/locations">
        Locations
      </NavLink>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCharacters: () => dispatch(setCharactersThunk()),
  setEpisodes: () => dispatch(setEpisodesThunk()),
});

export default connect(null, mapDispatchToProps)(Nav);
