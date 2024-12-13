'use client';

import React, { useState, useEffect } from 'react';

export default function ChangePassword() {
  const [userId, setUserId] = useState<string | null>(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch userId from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    console.log('Retrieved loggedInUser from localStorage:', storedUser);
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser.userId);
      console.log('Parsed userId:', parsedUser.userId);
    } else {
      console.warn('No loggedInUser found in localStorage');
      setErrorMessage('User ID not found. Please log in again.');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Submitting form with:', {
      userId,
      currentPassword,
      newPassword,
      confirmPassword,
    });

    if (!userId) {
      setErrorMessage('User ID not found. Please log in again.');
      console.error('Submission error: Missing userId');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('New password and confirm password do not match.');
      console.warn('Password mismatch: New password does not match confirm password');
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5088/api/Users/update-password/${userId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            currentPassword,
            newPassword,
          }),
        }
      );

      console.log('API response status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('API response data:', data);
        setSuccessMessage(data.Message || 'Password updated successfully.');
        setErrorMessage('');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        const error = await response.json();
        console.error('API error response:', error);
        setErrorMessage(error.Message || 'Failed to update password.');
      }
    } catch (err) {
      console.error('Error during API call:', err);
      setErrorMessage('An error occurred while updating the password.');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">Change Password</h2>
      <form onSubmit={handleSubmit}>
        {errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 mb-4 text-center">{successMessage}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-3 border rounded-md"
            placeholder="Enter current password"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-3 border rounded-md"
            placeholder="Enter new password"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border rounded-md"
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" className="w-full bg-[#ee4d2d] text-white py-3 rounded-md hover:bg-[#d83e27]">
          Confirm
        </button>
      </form>
    </div>
  );
}
