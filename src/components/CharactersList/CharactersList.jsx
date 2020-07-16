import React from "react";
import Api from "../../API";
import "./CharactersList.css";

export default class CharactersList extends React.Component {
  // const items = arr.map( (el)=>{
  //         return (
  //             <li></li>
  //         )
  //     }
  // )

  rickMortyApi = new Api();

  componentDidMount(){
    // const charactersArr = this.rickMortyApi.getAllCharacters()
    //         .then((data) => data);

    // console.log(charactersArr);
      
  }

  render() {
    return (
      <div className="CharactersList">
        <h1>Characters</h1>
        <ul>{}</ul>
      </div>
    );
  }
}
