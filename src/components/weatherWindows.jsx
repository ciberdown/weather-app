import React from "react";

function WeatherWindows() {
  return (
    <div
      style={{
        backgroundColor: "black",
        maxWidth: "700px",
        height: "100vh",
        width: "60%",
        borderRadius: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(20px)",
        minWidth:'400px'
      }}
    ></div>
  );
}

export default WeatherWindows;
