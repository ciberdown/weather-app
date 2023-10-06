import React from "react";
import CustomTypography from "../customComponents/customTypography";
import Clock from "../sunTimes/clock/clock";
import getSunTimes from "../../utilities/uses/getSunTimes";
import { convertDateToNormalType } from "../../utilities/uses/convertDateToNormal";

function Sunset({ sunset }) {
  return (
    <CustomTypography
      text="Sunset"
      number={getSunTimes(sunset)}
    ></CustomTypography>
  );
}

export default Sunset;
