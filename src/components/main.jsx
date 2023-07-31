import React from "react";
import WeatherWindows from "./weatherWindows";
import { Box } from "@mui/material";
import cloudyBackground from "../assets/cloudy_background.jpg";
import TextInput from "./textInput";

function Main() {
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
      <TextInput />
      <WeatherWindows />
    </Box>
  );
}

export default Main;
