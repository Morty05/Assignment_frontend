import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser as login } from '../services/apiService';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = { email, password };
      const response = await login(data); // Send login request to backend
      console.log(response);

      if (response.token) {
        localStorage.setItem('token', response.token); // Store JWT in localStorage
        navigate('/cars'); // Redirect to cars page
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
