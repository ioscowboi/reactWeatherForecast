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
    // note: promises don't actually return any data
    //       however, this promise is being sent to payload which is storing the data:
    const request = axios.get(url);

    // if you want to inspect the xhr, uncomment here: 
    // console.log('Request:', request);
    
    // always return an action:
    return{
        type: FETCH_WEATHER,
        // optional property with additional data:
        // since we're passing a promise to payload, redux-promise takes over during the request,
        //      and returns a new payload with the ajax response object:
        payload: request,
        module: request
    };
}