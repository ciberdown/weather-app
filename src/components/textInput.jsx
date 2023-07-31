import { CircularProgress, TextField, colors } from "@mui/material";
import { red } from "@mui/material/colors";

export default function TextInput({ setCity, isLoading }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setCity(event.target.value);
    }
  };
  return (
    <div style={{ position: "relative", width: "50%", maxWidth: "600px" }}>
      <input
        id="textInput"
        onKeyDown={handleKeyDown}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(20px)",
          borderRadius: "10px",
          margin: 2,
          fontSize: "22px",
          border: 0,
          padding: "10px",
          color: "white",
          width: "100%",
        }}
        placeholder="Enter Location"
      />
      {isLoading && (
        <CircularProgress
          size={35}
          thickness={4}
          sx={{
            position: "absolute",
            right: 0,
            top: "7px",
            color: "white",
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
}
