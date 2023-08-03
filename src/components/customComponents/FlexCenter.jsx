function FlexCenter({ children, sx = undefined }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        ...sx,
      }}
    >
      {children}
    </div>
  );
}

export default FlexCenter;
