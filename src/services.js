import axios from 'axios'


export const api = {
    get(endpoint) {
        return axios.get(endpoint);
    }
}

export const api2 = {
    get(endpoint) {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${endpoint}`);
    }
}