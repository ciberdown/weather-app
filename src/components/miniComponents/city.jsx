import { Typography } from "@mui/material";

function CityName({ city, color = undefined, backgroundColor = undefined }) {
  return (
    <Typography
      sx={{
        color,
        backgroundColor,
        fontSize: "2.5rem",
      }}
    >
      {city}
    </Typography>
  );
}

export default CityName;
