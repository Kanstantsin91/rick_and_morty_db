import React from "react";
import { useState, useEffect } from "react";
import Api from "../../API";
import { Link } from "react-router-dom";
import "./EpisodeCharacters.css";

const EpisodeCharacters = (props) => {
  const { id } = props;

  const rickMortyApi = new Api();

  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    async function getCharacter(id) {
      const character = await rickMortyApi.getCharacter(id);
      setName(character.name);
      setImage(character.image);
    }

    getCharacter(id);
  }, [id, rickMortyApi]);

  return (
    <li className="EpisodeCharacters">
        <Link
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          to={`../character/${id}`}
        >
          {name}
        </Link>
      {isShown && (
        <span>
          <img src={image} alt={name} width="200px" height="200px"/>
        </span>
      )}
    </li>
  );
};

export default EpisodeCharacters;
