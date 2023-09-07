import React from "react";
import {
  numColor,
  numsFontSize,
  textColor,
  textFontSize,
} from "../../styles/constants";
import { Typography } from "@mui/material";
import FlexColCenter from "./FlexColCenter";

function CustomTypography({
  text,
  number,
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
    </FlexColCenter>
  );
}

export default CustomTypography;
