import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        height: "100vh",
        "background-color": "#f5f5f5",
      }}
    >
      <div style={{ " text-align": "center" }}>
        <h1
          style={{
            "font-size": "48px",
            color: "#333333",
            "margin-bottom": "20px",
          }}
        >
          404
        </h1>
        <p style={{ "font-size": "24px", color: "#666666" }}>Page not found</p>
      </div>
    </div>
  );
};

export default NotFound;
