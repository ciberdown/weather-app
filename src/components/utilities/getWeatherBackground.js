function getWeatherBackground(weather) {
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
