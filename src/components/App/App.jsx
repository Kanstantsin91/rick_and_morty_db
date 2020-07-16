import React from 'react';
import Header from '../Header'
import CharactersList from '../CharactersList';
import './App.css'

const App = () =>{
    return(
        <div className="App">
            <Header/>
            <CharactersList/>
        </div>
    );
}

export default App;
