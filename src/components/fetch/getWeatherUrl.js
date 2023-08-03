const API_Key = "6ec88446f8911930526d71f1c58ef8f5";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather`;

export const getWeatherUrlByCity = (city_name) => {
  const query = `?q=${city_name}&appid=${API_Key}`;
  return weatherUrl + query;
};

export const getWeatherUrlByLocation = (lon, lat) => {
  const query = `?lat=${lat}&lon=${lon}&appid=${API_Key}`;
  return weatherUrl + query;
};
