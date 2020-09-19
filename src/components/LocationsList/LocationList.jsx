import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import Paginator from '../Paginator';
import './LocationList.css';
import Location from '../Location';

class LocationList extends React.Component {

    render() {
        const { locations } = this.props;

        const items = locations.map((item) => {
            return (
                <li key={item.id}>
                    <Location
                        id={item.id}
                        name={item.name}
                        type={item.type}
                        dimension = {item.dimension}
                        residents = {item.residents}
                    />
                </li>
            );
        });

        if(!locations.length) {
            return <Spinner />
        }

        return (
            <React.Fragment>
            <div className="LocationList">
                <ul>
                    {items}
                </ul>
            </div>
             <Paginator flag={'locations'}/>
             </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        locations: state.locations
    }
}

export default connect(mapStateToProps)(LocationList);