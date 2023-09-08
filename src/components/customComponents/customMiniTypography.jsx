import { Box, Typography } from "@mui/material";
import React from "react";
import { numColor, textColor } from "../../styles/constants";

function CustomMiniTypography({
  text,
  number,
  sx = undefined,
  disableComma = false,
}) {
  return (
    <Box sx={{ display: "flex", ...sx }}>
      <Typography sx={{ color: textColor, whiteSpace: "nowrap" }}>
        {text}:&nbsp;
      </Typography>
      <Typography sx={{ color: numColor, whiteSpace: "nowrap" }}>
        {number}
        {!disableComma && ","}&nbsp;
      </Typography>
    </Box>
  );
}

export default CustomMiniTypography;
