import convertKelvinToCelcius from "./convertKelvinToCelcius";

function getWeatherBackground(weather, temp) {
  temp = convertKelvinToCelcius(temp);
  if (temp > 35) {
    return "desert.jpg";
  }
  switch (weather?.toLowerCase()) {
    case "clouds":
      const rnd = Math.random();
      if (rnd >= 0.5) {
        return "cloudy_background.jpg";
      } else {
        return "cloudy_background2.jpg";
      }
    case "rain":
      return "rain_background.jpg";
    case "snow":
      return "snow_background.jpg";

    default: //clear
      return "./clear_sky_background.jpg";
  }
}

export default getWeatherBackground;
