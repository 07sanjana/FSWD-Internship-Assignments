import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ 
      padding: "15px 30px", 
      backgroundColor: "#1e3a8a", 
      color: "white", 
      display: "flex", 
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2 style={{ margin: 0 }}>MyTravelApp</h2>
      <div>
        <Link to="/" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>About</Link>
        <Link to="/contact" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;