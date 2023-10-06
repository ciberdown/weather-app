import React from "react";

function Errors({ error }) {
  if (error.message === "Request failed with status code 404") {
    return (
      <h1
        style={{
          marginTop: "20px",
          fontWeight: "bolder",
          color: "white",
          fontFamily: "fantasy"
        }}
      >
        location not found!
      </h1>
    );
  } else {
    return <h1>error:{error.message}</h1>;
  }
}

export default Errors;
