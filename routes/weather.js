import express from 'express';
import getCityWithTemperature from '../controllers/weather.js';

const router = express.Router();
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/weather',async (req, res) => {
  const result = await getCityWithTemperature(req.body.cityName);
  let weatherText = "";
  if(result.status === 200) {
    weatherText = result.cityName + ', ' + result.temperature;
  }
  else
  {
    weatherText = "City is not found!";
  }
  res.status(result.status).render('index', { "weatherText": weatherText });
});

export default router;