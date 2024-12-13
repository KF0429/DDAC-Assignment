'use client';

import React, { useState } from 'react';
import Starting from '@/app/Components/Starting';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5088/api/Users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: formData.phoneNumber,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        // Save the token, username, and userId to localStorage
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({
            username: data.userName, // Matches backend's 'userName'
            token: data.Token, // Matches backend's 'Token'
            userId: data.userId, // Matches backend's 'userId'
          })
        );

        // Debugging: Log the stored user details
        console.log('User logged in:', {
          username: data.userName,
          token: data.Token, // Access 'Token' as it is sent by the backend
          userId: data.userId,
        });

        alert('Login successful!');
        router.push('/'); // Redirect to homepage/dashboard
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Invalid phone number or password.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      alert('An error occurred. Please try again later.');
    }
  };

  const navigateToRegister = () => {
    router.push('/authentication?page=register');
  };

  return (
    <Starting>
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Log In</h2>

        {/* Phone Input */}
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-[#ee4d2d] text-white py-3 rounded-md hover:bg-[#d83e27]"
        >
          LOG IN
        </button>

        {/* Navigation Links */}
        <div className="flex justify-between text-sm mt-4">
          <button
            type="button"
            onClick={() => alert('Redirecting to forgot password!')}
            className="text-[#ee4d2d] hover:underline"
          >
            Forgot Password
          </button>
          <button
            type="button"
            onClick={navigateToRegister}
            className="text-[#ee4d2d] hover:underline"
          >
            New to Shopee? Sign Up
          </button>
        </div>
      </form>
    </Starting>
  );
}
