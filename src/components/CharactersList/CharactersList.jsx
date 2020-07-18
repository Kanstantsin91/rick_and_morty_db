import React from "react";
import Api /*{ApiFetch} */ from "../../API";
import "./CharactersList.css";
import Character from "../Character";

export default class CharactersList extends React.Component {
  state = {
    characters: [],
  };

  rickMortyApi = new Api();

  // rickMortyApi = new ApiFetch();

  componentDidMount() {
    this.rickMortyApi.getAllCharacters().then((data) =>
      this.setState({
        characters: data,
      })
    );
  }

  render() {
    const { characters } = this.state;
    const items = characters.map((el) => {
      console.log(el);
      return (
        <li key={el.id}>
          <Character
            name={el.name}
            gender={el.gender}
            species={el.species}
            status={el.status}
            img={el.image}
            currentLocation={el.location.name}
            firstEpisodeUrl={el.episode[0]}
          />
        </li>
      );
    });
    return (
      <div className="CharactersList">
        <h1>Characters</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
