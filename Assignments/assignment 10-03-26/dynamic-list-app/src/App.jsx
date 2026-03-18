import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input.trim()]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div
      style={{
        height: "100vh",         // FULL viewport height
        width: "100vw",          // FULL viewport width
        backgroundColor: "#e0f7fa",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ color: "#00796b", marginBottom: "20px" }}>Dynamic Task List</h1>

      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          style={{
            padding: "10px",
            width: "250px",
            fontSize: "16px",
            border: "2px solid #00796b",
            borderRadius: "5px",
            outline: "none",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#00796b",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Add
        </button>
      </div>

      {/* Make the task list expand to fill remaining vertical space */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          width: "90%",
          maxWidth: "500px",
          flexGrow: 1,           // takes all remaining space
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          overflowY: "auto",     // scroll if too many tasks
        }}
      >
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              padding: "10px 20px",
              background: "#ffffff",
              border: "2px solid #00796b",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
              color: "#004d40",
            }}
          >
            {task}
            <button
              onClick={() => deleteTask(index)}
              style={{
                padding: "5px 10px",
                background: "#d32f2f",
                border: "none",
                borderRadius: "5px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;