import { TextField } from "@mui/material";

export default function TextInput() {
  return (
    <TextField
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(20px)",
        borderRadius: "5px",
        width: "60%",
        maxWidth: "600px",
        boxShadow: "0 5px 4px rgba(0,0,0,0.5)",
        margin:2
      }}
      id="outlined-basic"
      label="enter a location..."
      variant="outlined"
    />
  );
}
