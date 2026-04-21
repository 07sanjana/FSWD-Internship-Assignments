import { useEffect, useState } from "react";
import { getMessage } from "./api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getMessage()
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="app">
      <h1>Connect the Stack 🔗</h1>
      <div className="card">
        <p>Backend says:</p>
        <h2>{message}</h2>
      </div>
    </div>
  );
}

export default App;