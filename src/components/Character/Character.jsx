import React from 'react';

import './Character.css';
import { Link } from 'react-router-dom';

export default class Character extends React.Component {

    render() {
        const { name, img, status, currentLocation, firstEpisodeName, id, firstEpisodeUrl, currentLocationUrl} = this.props;

        let statusCircleClass = 'statusCircle';
        let episodeId = Number(firstEpisodeUrl.slice(firstEpisodeUrl.lastIndexOf('/')+1));
        let locationId = Number(currentLocationUrl.slice(currentLocationUrl.lastIndexOf('/')+1));
    
        if (status === 'Alive') {
            statusCircleClass += ' alive';
        } else if (status === 'Dead') {
            statusCircleClass += ' dead'
        }
    
        return (
            <div className="Character">
                <div className="imgBlock">
                    <img src={img} alt={name}/>
                </div>
                <div className="textBlock">
                    <div className="titleBlock">
                        <p className="name">
                            <Link to={`/character/${id}`}>
                                {name}
                            </Link>
                        </p>
                        <p className="status">
                            <span className={statusCircleClass}></span>
                            <span className="statusText"> {status}</span>
                        </p>
                    </div>
                    <div className="locationBlock">
                        <p className="title">Current location:</p>
                        <p className="location"><Link to ={`location/${locationId}`}>{currentLocation}</Link></p>
                    </div>
                    <div className="firstSeenBlock">
                        <p className="title">First seen in:</p>
                        <p className="firstEpisode"><Link to ={`episode/${episodeId}`}>{firstEpisodeName}</Link></p>
                    </div>
                </div>
                
            </div>
        );
    }
}