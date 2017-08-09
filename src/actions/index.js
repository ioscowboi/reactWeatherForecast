// npm install --save axios
import axios from 'axios';

// weather api key
const API_KEY = '29fd3127898293fcf654ece3f0914d6f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
// action creator to perform api request: 
export function fetchWeather(city,) {
    const url = `${ROOT_URL}&q=${city},us`;
    // return your promise from axios: 
    const request = axios.get(url);
    // always return an action:
    return{
        type: FETCH_WEATHER,
        // optional property with additional data:
        payload: request
    };
}