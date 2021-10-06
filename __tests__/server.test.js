import getCityWithTemperature from '../controllers/weather.js'


it("Return the city name with its temperature for valid city name", async () => {
  const cityName = "Nijmegen";
  const result = await getCityWithTemperature(cityName);
  expect(result.cityName).toBe(cityName);
  expect(typeof result.temperature).toBe('number');
  expect(result.status).toBe(200);
});

it("Return -404 status- for invalid city name", async () => {
  const cityName = "Atlantes";
  const result = await getCityWithTemperature(cityName);
  expect(result.status).toBe(404);
});