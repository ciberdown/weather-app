import React, { useEffect, useState } from "react";
import { MagicSpinner } from "react-spinners-kit";

function Loading({size}) {
  const [iconColor, setIconColor] = useState("blue"); // Initial color

  useEffect(() => {
    const colorArray = ["red", "green", "blue", "white", "purple"]; // Define an array of colors to cycle through
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % colorArray.length;
      setIconColor(colorArray[currentIndex]);
    }, 1000); // Change color every 1 second

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

  return (
    <div style={{ marginTop: "300px" }}>
      <MagicSpinner size={size} color={iconColor} />
    </div>
  );
}

export default Loading;
