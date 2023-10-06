import React from "react";
import CustomTypography from "../customComponents/customTypography";
import Clock from "./clock";
import getSunTimes from "../utilities/getSunTimes";
import { convertDateToNormalType } from "../utilities/convertDateToNormal";

function Sunset({ sunset }) {
  return (
    <CustomTypography text="Sunset" number={getSunTimes(sunset)}>
    </CustomTypography>
  );
}

export default Sunset;
