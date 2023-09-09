import React, { useEffect, useState } from "react";
import CityName from "./miniComponents/city";
import Temperature from "./miniComponents/temp/temp";
import Weather from "./miniComponents/weatherExplain";
import FlexCenter from "./customComponents/FlexCenter";
import FlexColCenter from "./customComponents/FlexColCenter";
import CustomMiniFlexBox from "./customComponents/customMiniTypography";
import { Box } from "@mui/material";
import CustomTypography from "./customComponents/customTypography";
import convertKelvinToCelcius from "./utilities/convertKelvinToCelcius";
import Sunrise from "./miniComponents/sunrise";
import Sunset from "./miniComponents/sunset";
import Winds from "./miniComponents/winds";

function WeatherWindows({ data }) {
  useEffect(() => {
    console.log(data);
  }, [data]);

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
        <FlexCenter>
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
        </FlexCenter>
      </FlexColCenter>
      <FlexCenter>
        <CustomTypography text="Humidity" number={data.main.humidity + "%"} />
        <Winds wind={data.wind} />
        <CustomTypography text="Pressure" number={data.main.pressure + "Pa"} />
      </FlexCenter>
      <FlexCenter>
        <Sunrise sunrise={data.sys.sunrise} />
        <Sunset sunset={data.sys.sunset} />
      </FlexCenter>
      <Box
        className="bottom-animate subtitle"
      >
        <CustomMiniFlexBox text="Visibility" number={data.visibility + "m"} />
        <CustomMiniFlexBox text="Base" number={data.base} />
        <CustomMiniFlexBox
          text="Coordination"
          number={"[" + data.coord.lon + ", " + data.coord.lat + "]"}
        />
        {data.main.sea_level && (
          <CustomMiniFlexBox
            text="Sea level"
            number={data.main.sea_level + "m"}
          />
        )}
        <CustomMiniFlexBox text="Country" number={data.sys.country} />
        <CustomMiniFlexBox
          text="Clouds"
          number={data.clouds.all}
          disableComma
        />
      </Box>
    </div>
  );
}

export default WeatherWindows;
