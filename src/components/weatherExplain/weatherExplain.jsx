import React from "react";
import getWeatherIconURL from "../../utilities/uses/getWeatherIconURL";
import "./style.scss";

function Weather({ input, color, icon }) {
  return (
    <div className="weather-explain-container" style={{ color }}>
      <img src={getWeatherIconURL(icon)} alt="weather explain icon" />
      {input}
    </div>
  );
}

export default Weather;
