import React from "react";
import CustomTypography from "../customComponents/customTypography";
import FlexColCenter from "../customComponents/FlexColCenter";

function Sunset({ sunset, color }) {
  return (
    <FlexColCenter>
      <CustomTypography color={color}>
        {sunset.getHours() +
          ":" +
          sunset.getMinutes() +
          ":" +
          sunset.getSeconds()}
      </CustomTypography>
      <CustomTypography color={color}>Sunset</CustomTypography>
    </FlexColCenter>
  );
}

export default Sunset;
