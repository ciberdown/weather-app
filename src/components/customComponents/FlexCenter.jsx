function FlexCenter({ children, sx = undefined, justifyContent = undefined }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent:
          justifyContent === undefined ? "center" : justifyContent,
        gap: "2rem",
        ...sx,
      }}
    >
      {children}
    </div>
  );
}

export default FlexCenter;
