import fetch from 'node-fetch';
import keys from '../sources/keys.js';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getCityWithTemperature(cityName) {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + keys.API_KEY);
    if (response.ok) {
      const weather = await response.json();
      return { "cityName": cityName, "temperature": weather.main.temp, "status": 200 };
    }
    else{
      return { "status": 404 };
    }
  } catch(err) {
    console.log(err);
  }
}

export default getCityWithTemperature