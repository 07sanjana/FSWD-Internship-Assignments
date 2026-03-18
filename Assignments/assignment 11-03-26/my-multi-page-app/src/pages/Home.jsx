import React from "react";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "40px", backgroundColor: "#f3f4f6", minHeight: "80vh" }}>
      <h1 style={{ color: "#1e3a8a" }}>Welcome to MyTravelApp</h1>
      <p style={{ fontSize: "18px", color: "#374151", maxWidth: "600px", margin: "20px auto" }}>
        Explore beautiful destinations, discover local cuisines, and plan your perfect trip with us. 
        Whether it’s a weekend getaway or a long vacation, we’ve got you covered!
      </p>
      <div style={{ marginTop: "30px" }}>
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" 
          alt="Travel" 
          style={{ width: "80%", borderRadius: "10px", boxShadow: "0px 4px 15px rgba(0,0,0,0.2)" }}
        />
      </div>
    </div>
  );
};

export default Home;