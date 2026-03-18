import React from "react";

const Contact = () => {
  return (
    <div style={{ padding: "40px", backgroundColor: "#fef3c7", minHeight: "80vh", textAlign: "center" }}>
      <h1 style={{ color: "#b45309" }}>Contact Us</h1>
      <p style={{ fontSize: "18px", color: "#92400e", maxWidth: "600px", margin: "20px auto" }}>
        Have questions or want to plan a special trip? Reach out to us! We’d love to help you make your travel dreams come true.
      </p>
      <div style={{ marginTop: "30px", fontSize: "18px", color: "#92400e" }}>
        <p>Email: support@mytravelapp.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: 123 Travel Street, Bengaluru, India</p>
      </div>
    </div>
  );
};

export default Contact;