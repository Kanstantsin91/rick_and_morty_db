import React from 'react';
import './CharactersList.css';
import Character from '../Character';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import Paginator from '../Paginator';

class CharactersList extends React.Component {

    render() {
        const { characters } = this.props;

        const items = characters.map((item) => {
            return (
                <li key={item.id}>
                    <Character
                        name={item.name}
                        img={item.image}
                        status={item.status}
                        species={item.species}
                        gender={item.gender}
                        currentLocation={item.location.name}
                        currentLocationUrl = {item.location.url}
                        firstEpisodeUrl={item.episode[0]}
                        firstEpisodeName={item.firstEpisodeName}
                        id={item.id}
                    />
                </li>
            );
        });

        if(!characters.length) {
            return <Spinner />
        }

        return (
            <React.Fragment>
            <div className="CharactersList">
                <ul>
                    {items}
                </ul>
            </div>
             <Paginator/>
             </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps)(CharactersList);