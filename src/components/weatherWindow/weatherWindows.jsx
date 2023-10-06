import React, { useEffect, useState } from "react";
import CityName from "../miniComponents/city";
import Temperature from "../tempreture/temp";
import Weather from "../weatherExplain/weatherExplain";
import FlexCenter from "../customComponents/FlexCenter";
import FlexColCenter from "../customComponents/FlexColCenter";
import "./weatherWindow.scss";
import CustomTypography from "../customComponents/customTypography";
import convertKelvinToCelcius from "../../utilities/uses/convertKelvinToCelcius";
import Winds from "../miniComponents/winds";
import GridSystem from "../customComponents/customGrid";
import Subtitle from "../subtitle/Subtitle";
import SunTimes from "../sunTimes/SunTimes";

function WeatherWindows({ data }) {
  return (
    <div className="weather-container weather-mobile">
      <FlexCenter
        sx={{
          marginTop: "50px",
          marginLeft: "50px",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <CityName city={data.name} />
        <Weather
          input={data.weather[0].description}
          icon={data.weather[0].icon}
        />
      </FlexCenter>
      <FlexColCenter>
        <Temperature temp={data.main.temp} />
        <GridSystem>
          <CustomTypography
            text="Min Temp"
            number={convertKelvinToCelcius(data.main.temp_min) + "°C"}
          />
          <CustomTypography
            text="Feels Like"
            number={convertKelvinToCelcius(data.main.feels_like) + "°C"}
          />
          <CustomTypography
            text="Max Temp"
            number={convertKelvinToCelcius(data.main.temp_max) + "°C"}
          />

          <CustomTypography text="Humidity" number={data.main.humidity + "%"} />
          <Winds wind={data.wind} />
          <CustomTypography
            text="Pressure"
            number={data.main.pressure + "Pa"}
          />
        </GridSystem>
      </FlexColCenter>

      <SunTimes data={data} />

      <Subtitle data={data} />
    </div>
  );
}

export default WeatherWindows;
