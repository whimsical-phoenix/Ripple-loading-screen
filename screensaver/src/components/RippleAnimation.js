import React, { useEffect } from "react";
import "./RippleAnimation.css";
import ErrorBoundary from "./ErrorBoundary";

const RippleAnimation = () => {
  useEffect(() => {
    const audio = new Audio("it-is-a-morning-111708.mp3"); //by -SamuelFrancisJohnson-

    const playAudio = () => {
      audio.play().catch((error) => {
        // Auto-play was prevented, handle it here
        console.error("Auto-play prevented:", error);
      });
    };

    playAudio();

    // Restart playback when the audio finishes
    audio.addEventListener("ended", playAudio);

    return () => {
      // Cleanup when the component is unmounted
      audio.removeEventListener("ended", playAudio);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <ErrorBoundary>
      <div className="ripple-background">
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle medium shade4"></div>
        <div className="circle small shade5"></div>
      </div>
    </ErrorBoundary>
  );
};

export default RippleAnimation;
