import React from "react";
import CityName from "./miniComponents/city";
import Temperature from "./miniComponents/temp";
import Weather from "./miniComponents/weather";
import FeelsLike from "./miniComponents/feelsLike";
import Humidity from "./miniComponents/humidity";
import Winds from "./miniComponents/winds";
import FlexCenter from "./customComponents/FlexCenter";
import Pressure from "./miniComponents/pressure";
import Sunrise from "./miniComponents/sunrise";
import { convertDateToNormalType } from "./calculates/convertDateToNormal";
import Sunset from "./miniComponents/sunset";

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
      <Weather color={textColor} input={data.weather[0].description} />
      <FlexCenter>
        <FeelsLike color={textColor} feellike={data.main.feels_like} />
        <Humidity color={textColor} humidity={data.main.humidity} />
        <Winds color={textColor} winds={data.wind.speed} />
        <Pressure color={textColor} pressure={data.main.pressure} />
      </FlexCenter>

      <FlexCenter>
        <Sunrise
          color={textColor}
          sunrise={convertDateToNormalType(data.sys.sunrise)}
        />
        <Sunset
          color={textColor}
          sunset={convertDateToNormalType(data.sys.sunset)}
        />
      </FlexCenter>
    </div>
  );
}

export default WeatherWindows;
