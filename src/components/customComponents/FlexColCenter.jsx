import React from "react";

function FlexColCenter({ children, sx = undefined }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        ...sx,
      }}
    >
      {children}
    </div>
  );
}

export default FlexColCenter;
