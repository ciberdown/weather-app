import { Box } from "@mui/material";
import React from "react";
import "./subtitle.scss";
import CustomMiniFlexBox from "../customComponents/customMiniTypography";

function Subtitle({data}) {
  return (
    <div className="bottom-animate subtitle">
      <CustomMiniFlexBox text="Visibility" number={data.visibility + "m"} />
      <CustomMiniFlexBox text="Base" number={data.base} />
      <CustomMiniFlexBox
        text="Coordination"
        number={"[" + data.coord.lon + ", " + data.coord.lat + "]"}
      />
      {data.main.sea_level && (
        <CustomMiniFlexBox
          text="Sea level"
          number={data.main.sea_level + "m"}
        />
      )}
      <CustomMiniFlexBox text="Country" number={data.sys.country} />
      <CustomMiniFlexBox text="Clouds" number={data.clouds.all} disableComma />
    </div>
  );
}

export default Subtitle;
