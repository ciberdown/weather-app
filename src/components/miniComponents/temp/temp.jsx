import Thermometer from "react-thermometer-component";
import React from "react";
import convertKelvinToCelcius from "../../utilities/convertKelvinToCelcius";

function Temperature({ temp }) {
  return (
   
      <Thermometer
        theme="dark"
        value={convertKelvinToCelcius(temp)}
        max="70"
        steps="1"
        format="°C"
        size="small"
        height="100"
      />
  );
}

export default Temperature;
