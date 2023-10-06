import Thermometer from "react-thermometer-component";
import React from "react";
import convertKelvinToCelcius from "../../utilities/uses/convertKelvinToCelcius";
import "./temp.scss";

function Temperature({ temp }) {
  return (
    <div className="thermometer">
      <Thermometer
        theme="dark"
        value={convertKelvinToCelcius(temp)}
        max="70"
        steps="1"
        format="°C"
        size="small"
        height="100"
      />
    </div>
  );
}

export default Temperature;
