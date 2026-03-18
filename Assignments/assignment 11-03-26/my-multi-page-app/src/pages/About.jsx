import React from "react";

const About = () => {
  return (
    <div style={{ padding: "40px", backgroundColor: "#e0f2fe", minHeight: "80vh" }}>
      <h1 style={{ color: "#0369a1", textAlign: "center" }}>About Us</h1>
      <p style={{ maxWidth: "700px", margin: "20px auto", fontSize: "18px", color: "#1e293b", lineHeight: "1.6" }}>
        MyTravelApp is a platform for travel enthusiasts who want to explore new destinations, taste amazing food, 
        and create unforgettable memories. Our mission is to make travel planning easy and enjoyable for everyone.
      </p>
      <p style={{ maxWidth: "700px", margin: "20px auto", fontSize: "18px", color: "#1e293b", lineHeight: "1.6" }}>
        From local hidden gems to famous tourist spots, we provide you with the latest guides and tips so that every trip 
        you take is a memorable adventure.
      </p>
    </div>
  );
};

export default About;