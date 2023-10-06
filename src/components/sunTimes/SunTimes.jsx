import React from "react";
import Clock from "./clock/clock";
import FlexCenter from "../customComponents/FlexCenter";
import Sunrise from "../miniComponents/sunrise";
import Sunset from "../miniComponents/sunset";
import { convertDateToNormalType } from "../../utilities/uses/convertDateToNormal";
import "./sunTimes.scss";

function SunTimes({ data }) {
  return (
    <FlexCenter>
      <Clock
        class="left-clock"
        time={convertDateToNormalType(data.sys.sunrise)}
      />
      <Sunrise sunrise={data.sys.sunrise} />
      <Sunset sunset={data.sys.sunset} />

      <Clock
        class="right-clock"
        time={convertDateToNormalType(data.sys.sunset)}
      />
    </FlexCenter>
  );
}

export default SunTimes;
