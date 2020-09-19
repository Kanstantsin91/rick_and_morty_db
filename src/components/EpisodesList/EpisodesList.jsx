import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './EpisodesList.css';

const EpisodesList = (props) => {

    const {episodes} = props;
    let [activeSeason, setActiveSeason] = useState(1);

    episodes.forEach(element => {
        element.season = Number(element.episode.split('S').join('').split('E')[0]);
    });

    const seasons = new Set();
    episodes.forEach(item => seasons.add(item.season));
    const seasonCount = seasons.size;

    const seasonArr = [];
    for (let i = 1; i <= seasonCount; i++){
    let seasonEl = <div key={i} className={i===1?"active": ""} onClick={(event) => {
        setActiveSeason(i);
        document.querySelectorAll('.seasons div').forEach( (el) => el.classList.remove('active'));
        event.target.classList.add('active');

    }}>Season {i}</div>;
    seasonArr.push(seasonEl);
    }
    
    const items = episodes.map((item) => {
        if(item.season === activeSeason){
        return (
        <li key={item.id}>
        <Link to={`/episode/${item.id}`}><span className="season-and-episode">{item.episode}</span> <span>{item.name}</span></Link>
        </li>
        );
    } else return null;});
    
    return(
    <div className="EpisodesList">
    <div className="seasons">{seasonArr}</div>
    <ul>{items}</ul>
    </div>
    );
}

const mapStateToProps = (state) => {
    return {
        episodes: state.episodes
    }
}

export default connect(mapStateToProps)(EpisodesList);