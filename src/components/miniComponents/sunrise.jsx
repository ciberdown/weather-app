import React from "react";
import CustomTypography from "../customComponents/customTypography";
import FlexColCenter from "../customComponents/FlexColCenter";

function Sunrise({ sunrise, color }) {
  return (
    <FlexColCenter>
      <CustomTypography color={color}>
        {sunrise.getHours() +
          ":" +
          sunrise.getMinutes() +
          ":" +
          sunrise.getSeconds()}
      </CustomTypography>
      <CustomTypography color={color}>Sunrise</CustomTypography>
    </FlexColCenter>
  );
}

export default Sunrise;
