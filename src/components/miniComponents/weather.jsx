import { Typography } from "@mui/material";
import React from "react";

function Weather({ input, color }) {
  return (
    <Typography
      sx={{
        color,
        position: "absolute",
        right: 0,
        rotate: "-90deg",
      }}
    >
      {input}
    </Typography>
  );
}

export default Weather;
