import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (!newPassword) {
      setErrorMessage('New Password is required.');
      return;
    }
    if (newPassword.length < 8) {
      setErrorMessage('Password must be at least 8 characters.');
      return;
    }
    if (!confirmPassword) {
      setErrorMessage('Confirm Password is required.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Simulate password reset process
    resetPassword(newPassword)
      .then(() => {
        alert('Password reset successful!');
        navigate('/login');
      })
      .catch(() => {
        setErrorMessage('An error occurred during password reset.');
      });
  };

  const resetPassword = (password) => {
    // Simulate an API call to reset the password
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Password Reset</h2>
        <div className="mb-4">
          <label className="block text-gray-700">New Password</label>
          <input
            type="password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleResetPassword}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Reset Password
        </button>
        {errorMessage && <div className="mt-4 text-red-500">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default PasswordReset;
