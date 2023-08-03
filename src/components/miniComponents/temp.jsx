import { Typography } from "@mui/material";
import React from "react";
import CustomTypography from "../customComponents/customTypography";

function Temperature({ temp, color = undefined, backgroundColor = undefined }) {
  const tempNum = temp - 273.15;
  return (
    <CustomTypography color={color}>
      {tempNum.toFixed(1) + " ºC"}
    </CustomTypography>
  );
}

export default Temperature;
