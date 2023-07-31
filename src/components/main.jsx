import React, { useRef, useState } from "react";
import WeatherWindows from "./weatherWindows";
import { Box } from "@mui/material";
import cloudyBackground from "../assets/cloudy_background.jpg";
import TextInput from "./textInput";
import { useQuery } from "react-query";
import { fetchWeather } from "./fetch/fetchWeatherApi";
import { getWeatherUrlByCity } from "./fetch/getWeatherUrl";

function Main() {
  const [city, setCity] = useState("");
  const { data, isLoading, isError, error, status } = useQuery(
    city,
    () => fetchWeather(getWeatherUrlByCity(city)),
    { enabled: city !== "" }
  );
  console.log(city);
  console.log(data);
  console.log(status);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: `url(${cloudyBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        
      }}
    >
      <TextInput setCity={setCity} isLoading={isLoading} />
      {isError ? <h1>error:{error.message}</h1> : <WeatherWindows />}
    </Box>
  );
}

export default Main;
