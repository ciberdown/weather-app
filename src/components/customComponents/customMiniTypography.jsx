import { Box, Typography } from "@mui/material";
import React from "react";
import { numColor, textColor } from "../../styles/constants";

function CustomMiniTypography({ text, number, sx = undefined }) {
  return (
    <Box sx={{ display: "flex", ...sx }}>
      <Typography sx={{ color: textColor }}>{text}:&nbsp;</Typography>
      <Typography sx={{ color: numColor }}>{number},&nbsp;</Typography>
    </Box>
  );
}

export default CustomMiniTypography;
