import { Typography } from "@mui/material";
import { createSelector } from "reselect";
import React from "react";
import { useSelector } from "react-redux";

function WeatherWindows() {
  // Usage in a component

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
      {<Typography>{}</Typography>}
    </div>
  );
}

export default WeatherWindows;
