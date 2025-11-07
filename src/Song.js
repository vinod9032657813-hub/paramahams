

import React, { useRef } from "react";

function Song() {
  const audioRef = useRef(null);

  // Play song when image clicked
  const handleImageClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Click the image to play the song 🎵</h2>

      {/* Image to click */}
      <img
        src="audiologo.png"
        alt="Play Song"
        onClick={handleImageClick}
        style={{ cursor: "pointer", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)" }}
      />

      {/* Audio element */}
      <audio ref={audioRef} src="/song.mp3" preload="auto" />
    </div>
  );
}

export default Song;
