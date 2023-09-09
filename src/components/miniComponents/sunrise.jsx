import React from "react";
import CustomTypography from "../customComponents/customTypography";
import Clock from "./clock";
import getSunTimes from "../utilities/getSunTimes";
import { convertDateToNormalType } from "../utilities/convertDateToNormal";

function Sunrise({ sunrise }) {
  return (
    <CustomTypography text="Sunrise" number={getSunTimes(sunrise)}>
      <Clock
        class='left-clock'
        time={convertDateToNormalType(sunrise)}
      />
    </CustomTypography>
  );
}

export default Sunrise;
