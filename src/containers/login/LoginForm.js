import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const route = useNavigate();

    const handleSubmit = () => {
        localStorage.setItem('email', email);
        route('/');
    };

    return (
        <div style={{marginLeft: '650px', marginTop: '60px', marginBottom: '300px'}}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Not a member? <a href="/register">Register</a></p>
        </div>
    );
}