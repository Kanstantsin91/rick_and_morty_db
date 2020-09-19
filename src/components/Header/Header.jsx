import React from 'react';
//import './Header.css';
import styles from './Header.module.css';
import Nav from '../Nav';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const P = styled.p`
    font-size: 50px;
    font-weight: bold;
    font-style: italic;
    margin: 0;
`;

const Header = () => {
    return (
        <div className={`Header ${styles.Header}`} >
            <NavLink className={`logo_link ${styles.logo_link}` } to='/'> <div className="title_block" ><P>Rick and Morty BD</P></div></NavLink>
            <div className="nav_block" >
                <Nav />
            </div>
        </div>
    );
}

export default Header;