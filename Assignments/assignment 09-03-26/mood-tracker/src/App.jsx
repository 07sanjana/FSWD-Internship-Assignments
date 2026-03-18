import React, { useState } from "react";

const moods = [
  { emoji: "😊", label: "Happy", color: "#ffe066", textColor: "#333" },
  { emoji: "😔", label: "Sad", color: "#74c0fc", textColor: "#fff" },
  { emoji: "😡", label: "Angry", color: "#ff6b6b", textColor: "#fff" },
  { emoji: "😴", label: "Tired", color: "#adb5bd", textColor: "#333" },
  { emoji: "😎", label: "Cool", color: "#63e6be", textColor: "#333" }
];

function App() {
  const [selectedMood, setSelectedMood] = useState(null);

  const backgroundColor = selectedMood ? selectedMood.color : "#f8f9fa";
  const textColor = selectedMood ? selectedMood.textColor : "#333";

  return (
    <div
      style={{
        minHeight: "100vh",            // full viewport height
        width: "100vw",                // full viewport width
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: backgroundColor,
        color: textColor,
        transition: "all 0.6s ease",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "30px" }}>🌈 Mood Tracker</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => setSelectedMood(mood)}
            style={{
              fontSize: "3rem",
              padding: "20px",
              borderRadius: "15px",
              cursor: "pointer",
              border: selectedMood?.label === mood.label ? "4px solid #333" : "2px solid #ccc",
              background:
                selectedMood?.label === mood.label ? "#fff" : "rgba(255,255,255,0.7)",
              boxShadow:
                selectedMood?.label === mood.label
                  ? "0 8px 16px rgba(0,0,0,0.3)"
                  : "0 4px 8px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease"
            }}
          >
            {mood.emoji}
          </button>
        ))}
      </div>

      {selectedMood && (
        <div
          style={{
            marginTop: "50px",
            fontSize: "2rem",
            padding: "25px 50px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.6)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            textAlign: "center",
            maxWidth: "90%",
          }}
        >
          You are feeling {selectedMood.emoji} <strong>{selectedMood.label}</strong> today!
        </div>
      )}
    </div>
  );
}

export default App;