import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../API";
import EpisodeCharacters from "../EpisodeCharacters";
import './EpisodePage.css'

const EpisodePage = () => {
  const rickMortyApi = new Api();

  let { id } = useParams();

  const [name, setName] = useState();
  const [episode, setEpisode] = useState();
  const [airDate, setAirDate] = useState();
  const [characters, setCharacters] = useState();

  useEffect(() => {
    async function getEpisode(id) {
      const episode = await rickMortyApi.getEpisode(id);
      setName(episode.name);
      setAirDate(episode.air_date);
      setEpisode(episode.episode);
      let linkArr = episode.characters.map((item, index) => {
          const id= item.slice(item.lastIndexOf('/')+1);
          return (
        <EpisodeCharacters key={index} id={id}/>
        )
      });
      setCharacters(linkArr);
    }
    getEpisode(id);
  }, []);

  

  return (
    <div
      className="EpisodePage"
    >
      <h2>{name}</h2>
      <div><span>Episode: </span>{episode}</div>
      <div><span>Air date: </span>{airDate}</div>
      <div><span>Characters in episode:</span></div>
      <ul>{characters}</ul>
    </div>
  );
};

export default EpisodePage;
