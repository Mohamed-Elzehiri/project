// src/components/Loader.js
import React from "react";
import "./Loader.css"; // يمكنك تخصيص التصميم في ملف CSS

const Loader = () => {
  return (
    <div className="loader">
      <h2>Loading...</h2>
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
