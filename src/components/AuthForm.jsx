import React, { useState } from 'react';
import axios from 'axios';

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true); // True for login, false for signup
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLogin) {
            // Login
            try {
                const response = await axios.post('/api/auth/login', {
                    email: formData.email,
                    password: formData.password,
                });
    
                // Save the token to localStorage or context for session management
                localStorage.setItem('userToken', response.data.token);
    
                // Redirect or perform further actions
                console.log('Login successful:', response.data);
                alert('Login successful');
                
            } catch (error) {
                console.error('Error logging in:', error.response.data);
                alert(error.response.data.message);
            }
        } else {
            // Signup
            try {
                const response = await axios.post('/api/auth/signup', formData);
    
                // Save the token to localStorage or context for session management
                localStorage.setItem('userToken', response.data.token);
    
                // Redirect or perform further actions
                console.log('Signup successful:', response.data);
                alert('Registration successful');
            } catch (error) {
                console.error('Error signing up:', error.response.data);
                alert(error.response.data.message);
            }
        }
    };

    return (
        <div className="container mx-auto p-6 max-w-sm">
            <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <>
                        <input
                            className="border p-2 w-full mb-4"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            className="border p-2 w-full mb-4"
                            type="tel"
                            name="number"
                            placeholder="Phone Number"
                            value={formData.number}
                            onChange={handleChange}
                        />
                    </>
                )}
                <input
                    className="border p-2 w-full mb-4"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    className="border p-2 w-full mb-4"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded">
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
                <button
                    type="button"
                    className="text-sm mt-4 text-blue-500 hover:text-blue-700"
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? 'Need an account? Sign up' : 'Already have an account? Login'}
                </button>
            </form>
        </div>
    );
}

export default AuthForm;
