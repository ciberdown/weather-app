export const getWeatherUrlByCity = (city_name) => {
  const API_Key = "6ec88446f8911930526d71f1c58ef8f5";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather`;
  const query = `?q=${city_name}&appid=${API_Key}`;

  //historical

  return weatherUrl + query;
};
