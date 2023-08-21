import React from "react";
import FlexColCenter from "../customComponents/FlexColCenter";
import CustomTypography from "../customComponents/customTypography";

function Winds({ color, winds }) {
  return (
    <FlexColCenter>
      <CustomTypography color={color}>
        {winds.toFixed(1) + "MPH"}
      </CustomTypography>
      <CustomTypography color={color}>Winds</CustomTypography>
    </FlexColCenter>
  );
}

export default Winds;
