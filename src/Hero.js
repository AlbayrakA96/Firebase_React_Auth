import React from "react";

const Hero = ({ handleLogout }) => {
  return (
    <div className="hero">
      <nav>
        <h2>ALBYRK</h2>
        <button >Projects</button>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default Hero;
