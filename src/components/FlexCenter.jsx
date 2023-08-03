function FlexCenter({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {children}
    </div>
  );
}

export default FlexCenter;
