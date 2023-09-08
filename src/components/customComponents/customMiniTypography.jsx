import { Box, Typography } from "@mui/material";
import React from "react";
import { defaultFont, numColor, textColor } from "../../styles/constants";

function CustomMiniTypography({
  text,
  number,
  sx = undefined,
  disableComma = false,
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", ...sx }}>
      <Typography
        sx={{
          color: textColor,
          whiteSpace: "nowrap",
          fontFamily: defaultFont,
        }}
      >
        {text}:&nbsp;
      </Typography>
      <Typography
        sx={{
          color: numColor,
          whiteSpace: "nowrap",
          fontFamily: defaultFont,
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {number}
        {!disableComma && ","}&nbsp;
      </Typography>
    </Box>
  );
}

export default CustomMiniTypography;
