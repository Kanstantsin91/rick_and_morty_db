import React from "react";
import "./Character.css";
import Api from "../../API";

export default class Character extends React.Component {
  rickMortyApi = new Api();

  state = {
    firstEpisodeUrl: null,
  };

  componentDidMount() {
    this.rickMortyApi
      .getEpisodeName(this.props.firstEpisodeUrl)
      .then((name) => {
        this.setState({
          firstEpisodeName: name,
        });
      });
  }

  render() {
    const { img, name, status, gender, species, currentLocation } = this.props;

    let statusCircleClass = `statusCircle ${status.toLowerCase()}`;

    return (
      <div className="Character">
        <div className="imgBlock">
          <img src={img} alt={name}></img>
        </div>
        <div className="textBlock">
          <div className="TitleBlock">
            <p className="name">{name}</p>
            <p className="status">
              <span className={statusCircleClass}></span>
              <span className="statusText">{status}</span>
              <span>-</span>
              <span className="species">{species}</span>
              <span>-</span>
              <span className="gender">{gender}</span>
            </p>
          </div>
          <div className="locationBlock">
            <p className="title">Current location:</p>
            <p className="title">{currentLocation}</p>
          </div>
          <div className="firstSeenBlock">
            <p className="title">First seen in:</p>
            <p className="title">{this.state.firstEpisodeName}</p>
          </div>
        </div>
      </div>
    );
  }
}
