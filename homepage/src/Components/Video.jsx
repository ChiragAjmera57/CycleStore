import React from "react";
import cycle from "../New folder/cycle.mp4";
import "./video.css";

export default function Video() {
  return (
    <div className="vmain">
      <video autoPlay muted loop src={cycle} playsInline className="video">
        
      </video>
     
      
    </div>
  );
}
