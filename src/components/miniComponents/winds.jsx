import React from "react";
import { arrowIconColor } from "../../styles/constants";
import CustomTypography from "../customComponents/customTypography";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Tooltip } from "@mui/material";

function Winds({ wind }) {
  return (
    <CustomTypography text="Winds" number={wind.speed + "MPH"}>
      <Tooltip title={wind.deg + "deg"}>
        <NavigationIcon
          fontSize="small"
          sx={{ rotate: wind.deg + "deg", color: arrowIconColor }}
        />
      </Tooltip>
    </CustomTypography>
  );
}

export default Winds;
