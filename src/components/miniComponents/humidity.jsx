import { Typography } from "@mui/material";
import React from "react";
import FlexColCenter from "../customComponents/FlexColCenter";
import CustomTypography from "../customComponents/customTypography";

function Humidity({ humidity, color }) {
  return (
    <FlexColCenter>
      <CustomTypography color={color}>{humidity + "%"}</CustomTypography>
      <CustomTypography color={color}>Humidity</CustomTypography>
    </FlexColCenter>
  );
}

export default Humidity;
