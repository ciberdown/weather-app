import React from "react";
import CustomTypography from "../customComponents/customTypography";
import FlexColCenter from "../customComponents/FlexColCenter";

function Pressure({ pressure, color }) {
  return (
    <FlexColCenter>
      <CustomTypography color={color}>{pressure}</CustomTypography>
      <CustomTypography color={color}>Pressure</CustomTypography>
    </FlexColCenter>
  );
}

export default Pressure;
