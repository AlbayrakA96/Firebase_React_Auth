import React from "react";
import '../Hero/Hero.css'

const Hero = ({ handleLogout }) => {
  return (
    <div className="hero">
      <nav>
        <h2>ALBYRK</h2>
        <button >Projects</button>
        <button onClick={handleLogout}>Logout</button>
      </nav> 
      <main>
        <h3>Under Construction</h3>
      </main> 
    </div>
  );
};

export default Hero;
