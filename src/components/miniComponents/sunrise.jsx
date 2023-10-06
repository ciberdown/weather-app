import React from "react";
import CustomTypography from "../customComponents/customTypography";
import getSunTimes from "../utilities/getSunTimes";

function Sunrise({ sunrise }) {
  return (
    <CustomTypography text="Sunrise" number={getSunTimes(sunrise)}>

    </CustomTypography>
  );
}

export default Sunrise;
