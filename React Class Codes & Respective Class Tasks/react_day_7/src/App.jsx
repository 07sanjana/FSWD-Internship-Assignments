import { useState } from "react";
import React from "react";

/* MANUAL
function App() {
  const handleSubmit = (event) => {
    event.preventDefault(); //stops page refreshing
    alert ("Form submitted!");
  }
  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit = {handleSubmit}>
        <input type="text" placeholder = "Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
*/

/*
function App() {
  const [name, setName] = useState("");
  const handleChange=(e)=>{
    setName(e.target.value);
  }
  return (
    <div>
      <h2>Controlled Component</h2>
      <input type="text" value={name} onChange={handleChange} placeholder = "Enter your name" />
    <p>Your Name : {name}</p>
    </div>
  );
}
*/

import FormValidation from "./components/FormValidation";


function App() {
  return (
    <div className="app-container">
      <h1>React form Validatiion</h1>
      <FormValidation />
    </div>
  );
}

export default App;