// PostCard.jsx
import React from "react";

function PostCard({ title, body }) {
  return (
    <div style={styles.card}>
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.body}>{body}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex", // horizontal layout inside the card
    alignItems: "center",
    backgroundColor: "white",
    color: "black",
    padding: "16px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  content: {
    display: "flex",
    flexDirection: "row", // horizontal inside card
    gap: "16px",
  },
  title: {
    margin: 0,
    fontSize: "18px",
  },
  body: {
    margin: 0,
  },
};

export default PostCard;