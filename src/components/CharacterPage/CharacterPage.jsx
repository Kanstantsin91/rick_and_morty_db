import React, { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import Api from "../../API";
import"./CharacterPage.css";

const CharacterPage = () => {
  const rickMortyApi = new Api();

  let { id } = useParams();

  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [image, setImage] = useState();
  const [species, setSpecies] = useState();
  const [origin, setOrigin] = useState();
  const [type, setType] = useState();
  const [episodes, setEpisodes] = useState()
  const [originUrl, setOriginUrl] = useState();

  useEffect(() => {
    async function getCharacter(id) {
      const character = await rickMortyApi.getCharacter(id);
      console.log(character)
      setName(character.name);
      setGender(character.gender);
      setImage(character.image);
      setSpecies(character.species);
      setOrigin(character.origin.name);
      setOriginUrl(character.origin.url)
      setType(character.type);
      setEpisodes(character.episode.length);
    }

    getCharacter(id);
  }, [id, rickMortyApi]);

  return (
    <div className="CharacterPage">
      <div className="CharacterPageContent">
        <div className="characterBlock">
        <h2>{name}</h2>
          <div>
            <img src={image} alt={`${name}`} />
          </div>
          <div>
            <span>Species: </span>
            {species}
          </div>
          {type && <div>
            <span>Type: </span>
            {type}
          </div>}
          <div>
            <span>Gender: </span>
            {gender}
          </div>
          <div>
            <span>Origin: </span>
          {origin !=='unknown'&&
          <Link to={`../location/${originUrl?Number(originUrl.slice(originUrl.lastIndexOf('/')+1)):''}`}>{origin}</Link> 
          }
          {origin === 'unknown'&& origin}
          </div>
          <div>
            <span>Episodes with: </span>
            {episodes}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
