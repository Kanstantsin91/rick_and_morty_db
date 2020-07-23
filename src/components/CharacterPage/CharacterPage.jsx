import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../../API";

const CharacterPage = () => {

  let { id } = useParams();

  const rickMortyApi = new Api();

  useEffect(() => {
    async function getCharacter(id) {
      const character = await rickMortyApi.getCharacter(id);
      console.log(character);
    }

    getCharacter(id);
  }, [id, rickMortyApi]);

  return (
    <div className="CharacterPage">
      <h1>Character name</h1>
      CharacterPage - {}
    </div>
  );
};

export default CharacterPage;
