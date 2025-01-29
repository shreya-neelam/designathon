import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^s@]+@[^s@]+.[^s@]+$/;
    return re.test(email);
  };

  const handleSignUp = () => {
    if (!fullName) {
      setErrorMessage('Full Name is required.');
      return;
    }
    if (!email) {
      setErrorMessage('Email is required.');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Invalid email format.');
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
    if (!confirmPassword) {
      setErrorMessage('Confirm Password is required.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Simulate user creation process
    createUser(fullName, email, password)
      .then(() => {
        // Redirect to login with success message
        navigate('/login?success=1');
      })
      .catch((error) => {
        setErrorMessage('An error occurred during registration.');
      });
  };

  const createUser = (fullName, email, password) => {
    // Simulate an API call for user creation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleSignUp}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign Up
        </button>
        <div className="flex justify-center mt-4">
          <a href="/login" className="text-sm text-blue-500 hover:underline">
            Back to Login
          </a>
        </div>
        {errorMessage && <div className="mt-4 text-red-500">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Signup;
