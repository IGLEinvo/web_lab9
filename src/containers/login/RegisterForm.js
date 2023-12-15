import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        retypePassword: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        localStorage.setItem('email', formData.email);

        navigate('/');
    };

    return (
        <div style={{ marginLeft: '600px', marginTop: '50px', marginBottom: '300px' }}>
            <h2>Register the new account</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginTop: '40px' }}>
                    <label htmlFor="username" style={{ marginRight: '50px' }}>Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="email" style={{ marginRight: '80px' }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="password" style={{ marginRight: '50px' }}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="retypePassword">Retype Password:</label>
                    <input
                        type="password"
                        id="retypePassword"
                        name="retypePassword"
                        value={formData.retypePassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <p>Already a member? <a href="/login">Login</a></p>
                </div>
                <div>
                    <button type="submit">Sign me up</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;