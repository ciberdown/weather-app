import React from "react";
import CityName from "./miniComponents/city";
import Temperature from "./miniComponents/temp/temp";
import Weather from "./miniComponents/weatherExplain";
import FlexCenter from "./customComponents/FlexCenter";
import FlexColCenter from "./customComponents/FlexColCenter";
import CustomMiniFlexBox from "./customComponents/customMiniTypography";
import { Box, Tooltip } from "@mui/material";
import CustomTypography from "./customComponents/customTypography";
import convertKelvinToCelcius from "./utilities/convertKelvinToCelcius";
import getSunTimes from "./utilities/getSunTimes";
import NavigationIcon from "@mui/icons-material/Navigation";
import { arrowIconColor } from "../styles/constants";
import UpgradeIcon from "@mui/icons-material/Upgrade";

function WeatherWindows({ data }) {
  console.log(data);
  return (
    <div
      className="weather-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
        <CustomTypography text="Winds" number={data.wind.speed + "MPH"}>
          <Tooltip title={data.wind.deg + "deg"}>
            <NavigationIcon
              fontSize="small"
              sx={{ rotate: data.wind.deg + "deg", color: arrowIconColor }}
            />
          </Tooltip>
        </CustomTypography>
        <CustomTypography text="Pressure" number={data.main.pressure + "Pa"} />
      </FlexCenter>
      <FlexCenter>
        <CustomTypography
          text="Sunrise"
          number={getSunTimes(data.sys.sunrise)}
        />
        <CustomTypography text="Sunset" number={getSunTimes(data.sys.sunset)} />
      </FlexCenter>
      <Box sx={{ display: "flex", gap: "5px", overflow: "hidden" }}>
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
