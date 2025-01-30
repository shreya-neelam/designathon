import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axioss/api'; // Import the Axios instance

const Login = () => {
  const [usernameEmail, setUsernameEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErrorMessage(''); // Clear any previous error messages

    if (!usernameEmail) {
      setErrorMessage('Username or Email is required.');
      return;
    }

    if (!password) {
      setErrorMessage('Password is required.');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters.');
      return;
    }

    try {
      console.log("entered");
      const response = await api.put('/token', {
        username: usernameEmail,
        password: password,
      });

      const { access_token } = response.data;
      localStorage.setItem('token', access_token);

      // Optionally, store the "remember me" preference
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('rememberMe');
      }

      navigate('/dashboard');
    } catch (error) {
      setErrorMessage('Authentication failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Username or Email</label>
          <input
            type="text"
            placeholder="Enter your username or email"
            value={usernameEmail}
            onChange={(e) => setUsernameEmail(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="mr-2"
          />
          <label className="text-gray-700">Remember Me</label>
        </div>
        <button
          onClick={handleLogin}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
        <div className="flex justify-between mt-4">
          <a href="/password-recovery" className="text-sm text-blue-500 hover:underline">
            Forgot Password?
          </a>
          <a href="/signup" className="text-sm text-blue-500 hover:underline">
            Sign Up
          </a>
        </div>
        {errorMessage && <div className="mt-4 text-red-500">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Login;
