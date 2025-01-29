import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = () => {
    if (!email) {
      setErrorMessage('Email is required.');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Invalid email format.');
      return;
    }

    // Simulate sending a password recovery email
    sendRecoveryEmail(email)
      .then(() => {
        alert('Password recovery email sent!');
      })
      .catch(() => {
        setErrorMessage('An error occurred while sending the recovery email.');
      });
  };

  const sendRecoveryEmail = (email) => {
    // Simulate an API call to send a recovery email
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Password Recovery</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="text"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
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

export default PasswordRecovery;
