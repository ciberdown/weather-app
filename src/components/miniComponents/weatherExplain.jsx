import { Typography } from "@mui/material";
import React from "react";
import getWeatherIconURL from "../utilities/getWeatherIconURL";
function Weather({ input, color, icon }) {
  return (
    <Typography
      sx={{
        color,
        margin: 0,
        padding: 0,
        rotate: "-90deg",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={getWeatherIconURL(icon)} alt="weather explain icon" />
      {input}
    </Typography>
  );
}

export default Weather;
