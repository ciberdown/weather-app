import Thermometer from "react-thermometer-component";
import React from "react";
import convertKelvinToCelcius from "../../utilities/convertKelvinToCelcius";
import { Box } from "@mui/material";

function Temperature({ temp }) {
  return (
    <Box sx={{marginBottom:'100px', marginTop:'0'}}>
      <Thermometer
        theme="dark"
        value={convertKelvinToCelcius(temp)}
        max="70"
        steps="1"
        format="°C"
        size="small"
        height="100"
      />
    </Box>
  );
}

export default Temperature;
