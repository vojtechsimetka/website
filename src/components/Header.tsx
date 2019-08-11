import React from "react";
import ContactData from "data/Contact";

export default () => (
  <div>
    <div
      style={{
        height: "90vh",
        backgroundImage: "url('profile.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    />
    <div
      style={{
        height: "10vh",
        width: "100%"
      }}
    >
      <div
        style={{
          margin: 0,
          position: "relative",
          textAlign: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <h1>{ContactData.name}</h1>
        <h2>{ContactData.tagline}</h2>
      </div>
    </div>
  </div>
);
