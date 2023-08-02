import React, { useEffect, useRef, useState } from "react";
import WeatherWindows from "./weatherWindows";
import { Box } from "@mui/material";
import cloudyBackground from "../assets/cloudy_background.jpg";
import TextInput from "./textInput";
import { useQuery } from "react-query";
import { getWeatherUrlByCity } from "./fetch/getWeatherUrl";
import { useDispatch, useSelector } from "react-redux";

import { fetchWeather } from "./fetch/fetchWeatherAPIs";

function Main() {
  const [city, setCity] = useState("");
  const { isError, error, isLoading, data } = useSelector(
    (state) => state.weatherInfo
  );

  const dispatch = useDispatch();
  useQuery(city, () => fetchWeather(getWeatherUrlByCity(city), dispatch), {
    enabled: city !== "",
  });

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
