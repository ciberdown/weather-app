import Thermometer from "react-thermometer-component";
import React from "react";
import CustomTypography from "../customComponents/customTypography";
import Candle from "./candle";

function Temperature({ temp, color = undefined, backgroundColor = undefined }) {
  const tempNum = temp - 273.15;
  return (
    <CustomTypography color={color} sx={{ marginLeft: "20px" }}>
      <Thermometer
        theme="dark"
        value={tempNum.toFixed(1)}
        max="70"
        steps="1"
        format="°C"
        size="small"
        height="100"
      />
    </CustomTypography>
  );
}

export default Temperature;
