import React, { useState, useEffect } from "react";
import "./Preloader.css";
import avatar from "./assets/logo.jpg"; // Replace with your logo/icon

function Preloader() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className="preloader">
      <img src={avatar} alt="Loading Icon" className="preloader-icon" />
      <h1 className="countdown">{count > 0 ? count : "GO!"}</h1>
    </div>
  );
}

export default Preloader;
