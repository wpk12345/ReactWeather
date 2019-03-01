import axios from 'axios';

const API_KEY = "990113b3a33cb8a4755184ee8e107c17";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//FETCH_WEATHER is an action creator
export const FETCH_WEATHER = "FETCH_WEATHER";

//remember action creators always have to return an action, and actions always have to have a type
export function fetchWeather(city) {
  //just set country code to U.S.
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    //notice here we are returning the promise as the payload.  the promise from the axios.get(url)
    payload: request
  };
}
