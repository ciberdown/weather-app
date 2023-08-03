import { Typography } from "@mui/material";
import CustomTypography from "./customTypography";

function CityName({ city, color = undefined, backgroundColor = undefined }) {
  return (
    <CustomTypography
      sx={{
        color,
        backgroundColor,
        marginTop: "10rem",
        marginLeft: "1rem",
        fontSize: "2rem",
      }}
    >
      {city}
    </CustomTypography>
  );
}

export default CityName;
