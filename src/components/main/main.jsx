import React, { useState } from "react";
import WeatherWindows from "../weatherWindow/weatherWindows";
import { Box } from "@mui/material";
import TextInput from "../textInput/textInput";
import { useQuery } from "react-query";
import { getWeatherUrlByCity } from "../../utilities/fetch/getWeatherUrl";
import { useDispatch, useSelector } from "react-redux";
import "./main.scss";
import { fetchWeather } from "../../utilities/fetch/fetchWeatherAPIs";
import Errors from "../errors";
import getWeatherBackground from "../../utilities/uses/getWeatherBackground";
import { getLocalLocation } from "../../utilities/uses/handleLocalstorage.";
import Loading from "../loading";

function Main() {
  const [city, setCity] = useState(getLocalLocation());
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(./assets/${getWeatherBackground(
          data?.weather[0].main,
          data?.main.feels_like
        )})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <TextInput city={city} setCity={setCity} isLoading={isLoading} />
      {isError && <Errors error={error} />}
      {isLoading ? (
        <Loading size={200} />
      ) : (
        data && <WeatherWindows data={data} />
      )}
    </Box>
  );
}

export default Main;
