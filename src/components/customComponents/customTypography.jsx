import { Typography } from "@mui/material";
import React from "react";

function CustomTypography({
  color = undefined,
  fontSize = undefined,
  children = undefined,
  sx = undefined,
  backgroundColor = undefined,
}) {
  return (
    <Typography sx={{ color, fontSize, backgroundColor, ...sx }}>
      {children}
    </Typography>
  );
}

export default CustomTypography;
