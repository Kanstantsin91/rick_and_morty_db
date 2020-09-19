import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api/';
export class ApiFetch {
    getAllCharacters = async () => {
        const response = await fetch(`${baseURL}character`);
        const body = await response.json();
        const result = body.results;
        return result;
    }
}

export default class Api {

    instance = axios.create({
        baseURL: 'https://rickandmortyapi.com/api/'
    });

    getCharactersInfoByPage = async (pageNumber = null) => {
        const response = pageNumber ? await this.instance.get(`character/?page=${pageNumber}`) : await this.instance.get('character');
        const result = response.data;
        return result;
    }

    // getAllCharacters = async () => {
    //     const response = await this.instance.get('character');
    //     const result = response.data.results;
    //     return result;
    // }

    getCharacter = async (id) => {
        const response = await this.instance.get(`character/${id}`);
        const result = response.data;
        return result;
    }

    getEpisode = async (id) => {
        const response = await this.instance.get(`episode/${id}`);
        const result = response.data;
        return result;
    }

    getEpisodeName = async (url) => {
        this.instance.defaults.baseURL = "";
        const response = await this.instance.get(url);
        const result = response.data.name;
        this.instance.defaults.baseURL = "https://rickandmortyapi.com/api/";
        return result
    }

    getEpisodeList = async (page=1, arr=[]) => {
        let resultArr = [...arr]
        const response = await this.instance.get(`episode?page=${page}`);
        const result =[ ...resultArr, ...response.data.results];
        if(response.data.info.next){
            return this.getEpisodeList(++page, result);
        }
        return result;
    }
}