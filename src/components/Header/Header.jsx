import React from 'react';
import Nav from '../Nav';
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <div className="title_block"><p>Rick & Morty BD</p></div>
            <div className="nav_block">
                <Nav/>
            </div>
        </div>
    )
}

export default Header;