import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
  });


  export default class Api {

    getAllCharacters = async () => {
            const response = await instance.get('character');
            const result = response.data.results
            return result;
    }


    getCharacter = async (id) => {
            const response = await instance.get(`character/${id}`);
            const result = response.data;
            return result;
    }

  }

    
