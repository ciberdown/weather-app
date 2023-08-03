import { Typography } from "@mui/material";
import React from "react";
import FlexColCenter from "./FlexColCenter";

function FeelsLike({ feellike, color }) {
  const tempNum = feellike - 273.15;
  return (
    <FlexColCenter>
      <Typography
        sx={{
          color,
        }}
      >
        {tempNum.toFixed(1) + " ºC"}
      </Typography>
      <Typography sx={{ color }}>Feels Like </Typography>
    </FlexColCenter>
  );
}

export default FeelsLike;
