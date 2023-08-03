import React from "react";
import CityName from "./city";
import Temperature from "./temp";
import Weather from "./weather";
import FeelsLike from "./feelsLike";
import Humidity from "./humidity";
import Winds from "./winds";
import FlexCenter from "./FlexCenter";

function WeatherWindows({ data }) {
  console.log(data);
  const textColor = "white";

  return (
    <div
      style={{
        backgroundColor: "black",
        maxWidth: "700px",
        height: "100vh",
        width: "60%",
        borderRadius: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(20px)",
        minWidth: "400px",
        margin: "5px",
      }}
    >
      <CityName color={textColor} city={data.name} />
      <Temperature color={textColor} temp={data.main.temp} />
      <Weather color={textColor} input={data.weather[0].main} />
      <FlexCenter>
        <FeelsLike color={textColor} feellike={data.main.feels_like} />
        <Humidity color={textColor} humidity={data.main.humidity} />
        <Winds color={textColor} winds={data.wind.speed} />
      </FlexCenter>
    </div>
  );
}

export default WeatherWindows;
