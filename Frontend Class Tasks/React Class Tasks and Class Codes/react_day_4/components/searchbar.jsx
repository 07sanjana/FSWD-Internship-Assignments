// SearchBar.jsx
import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search posts"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={styles.search}
    />
  );
}

const styles = {
  search: {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #555",
    backgroundColor: "#2b2b2b",
    color: "white",
  },
};

export default SearchBar;