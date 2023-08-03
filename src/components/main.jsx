import React, { useEffect, useRef, useState } from "react";
import WeatherWindows from "./weatherWindows";
import { Box } from "@mui/material";
import cloudyBackground from "../assets/cloudy_background.jpg";
import TextInput from "./textInput";
import { useQuery } from "react-query";
import {
  getWeatherUrlByCity,
  getWeatherUrlByLocation,
} from "./fetch/getWeatherUrl";
import { useDispatch, useSelector } from "react-redux";

import { fetchWeather } from "./fetch/fetchWeatherAPIs";
import Errors from "./errors";

function Main() {
  const [city, setCity] = useState("");
  const { isError, error, isLoading, data } = useSelector(
    (state) => state.weatherInfo
  );

  const dispatch = useDispatch();

  useQuery(city, () => fetchWeather(getWeatherUrlByCity(city), dispatch), {
    enabled: city !== "",
    onUnmount: (data) => {
      // Cancel the ongoing query if it's still active
      if (data.cancel) {
        data.cancel();
      }
    },
  });

  if (isError) {
    return <Errors error={error} />;
  }
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
      <TextInput city={city} setCity={setCity} isLoading={isLoading} />
      {data && <WeatherWindows data={data} />}
    </Box>
  );
}

export default Main;
