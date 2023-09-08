import React from "react";
import {
  numColor,
  numsFontSize,
  textColor,
  textFontSize,
} from "../../styles/constants";
import { Box, Typography } from "@mui/material";
import FlexColCenter from "./FlexColCenter";
import FlexCenter from "./FlexCenter";

function CustomTypography({
  text,
  number,
  children = undefined,
  backgroundColor = undefined,
  sx = undefined,
  className = undefined,
}) {
  return (
    <FlexColCenter>
      <Typography
        className={className}
        sx={{ color: numColor, fontSize: numsFontSize, backgroundColor, ...sx }}
      >
        {number}
      </Typography>
      <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
        <Typography
          className={className}
          sx={{
            color: textColor,
            fontSize: textFontSize,
            backgroundColor,
            ...sx,
          }}
        >
          {text}
        </Typography>
        {children}
      </Box>
    </FlexColCenter>
  );
}

export default CustomTypography;
