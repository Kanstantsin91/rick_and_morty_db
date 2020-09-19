import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../API";
import EpisodeCharacters from '../EpisodeCharacters';
import './LocationPage.css';

const LocationPage = () => {
  const rickMortyApi = new Api();

  let { id } = useParams();

  const [name, setName] = useState();
  const [type, setType] = useState();
  const [dimension, setDimension] = useState();
  const [characters, setCharacters] = useState();

  useEffect(() => {
    async function getLocation(id) {
      const location = await rickMortyApi.getLocation(id);
      setName(location.name);
      setType(location.type);
      setDimension(location.dimension);
     
      let linkArr = location.residents.map((item, index) => {
          const id= item.slice(item.lastIndexOf('/')+1);
          return (
        <EpisodeCharacters key={index} id={id}/>
        )
      });
      setCharacters(linkArr);
    }
    getLocation(id);
  }, []);

  

  return (
    <div
      className="LocationPage"
    >
      <h2>{name}</h2>
      <div><span>Type: </span>{type}</div>
      <div><span>Dimension: </span>{dimension}</div>
      <div><span>Residents: </span></div>
      <ul>{characters}</ul>
    </div>
  );
};

export default LocationPage;
