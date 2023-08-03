import React from "react";

function FlexColCenter({ children }) {
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {children}
    </div>
  );
}

export default FlexColCenter;
