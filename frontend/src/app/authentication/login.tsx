'use client';

import React, { useState } from 'react';
import Starting from '@/app/Components/Starting';
import { useRouter } from 'next/navigation';

// Simulated user database
const mockUsers = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    phone: '1234567890',
    password: 'password123',
  },
  {
    username: 'jane_smith',
    email: 'jane@example.com',
    phone: '0987654321',
    password: 'password456',
  },
];

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate user credentials
    const user = mockUsers.find(
      (user) =>
        (user.email === formData.emailOrPhone ||
          user.phone === formData.emailOrPhone) &&
        user.password === formData.password
    );

    if (user) {
      // Save logged-in user to localStorage
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ username: user.username })
      );

      alert('Login successful!');
      router.push('/'); // Redirect to homepage/dashboard
    } else {
      alert('Invalid email/phone or password!');
    }
  };

  const navigateToRegister = () => {
    router.push('/authentication?page=register');
  };

  return (
    <Starting>
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Log In</h2>

        {/* Email/Phone Input */}
        <div>
          <label
            htmlFor="emailOrPhone"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone number / Username / Email
          </label>
          <input
            type="text"
            id="emailOrPhone"
            name="emailOrPhone"
            value={formData.emailOrPhone}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            placeholder="Enter your email or phone"
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
