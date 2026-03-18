import React, { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Welcome, ${username}!`);
    };

    return (
        <div>
            <h2>Login Form</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />

                <input
                    type="password"
                    placeholder="enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;