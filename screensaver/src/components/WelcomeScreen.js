// WelcomeScreen.js
import React from "react";
import { useHistory } from "react-router-dom";

const WelcomeScreen = () => {
  const history = useHistory();

  const handleClick = () => {
    // Navigate to the RippleAnimation page when clicked
    history.push("/RippleAnimation");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={handleClick}>
      <h1>Hello, Elizabeth</h1>
      <h2>Welcome back</h2>
    </div>
  );
};

export default WelcomeScreen;
