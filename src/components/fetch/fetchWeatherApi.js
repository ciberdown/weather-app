import axios from "axios";

export const fetchWeather = async (url) => {
  const res = await axios.get(url);
  return res.data;
};
