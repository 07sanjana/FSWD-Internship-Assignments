import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
function Navbar() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div style = {{
            background : theme === "light" ? "#eeeeee" : "#333333",
            color : theme === "light" ? "#333333" : "#ffffff",
            padding : "10px",
        }}>
            <h2>My App</h2>
            <button onClick = {toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
}

export default Navbar;