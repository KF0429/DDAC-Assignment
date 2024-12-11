'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface BuyerPageProps {
  phone?: string; // Phone number passed as a prop
}

export default function BuyerPage({ phone }: BuyerPageProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    password: '',
    phone: phone || '', // Pre-fill phone number
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5088/api/Users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: formData.phone,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        alert('Registration successful!');
        router.push('/authentication?page=login'); // Navigate to login page
      } else {
        const error = await response.json();
        console.error('Registration failed:', error);
        alert(error.Message || 'Registration failed.');
      }
    } catch (err) {
      console.error('Error during registration:', err);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white py-4 shadow">
        <div className="max-w-6xl mx-auto px-4 flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-[#ee4d2d] ml-4">
            Shopee Buyer Registration
          </h1>
        </div>
      </header>

      <div className="min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-6 bg-white rounded-md shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Enter Password
          </h2>

          {/* Phone Number (Readonly) */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              readOnly
              className="w-full p-3 border rounded-md bg-gray-100"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
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
              placeholder="Create a secure password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ee4d2d] text-white py-3 rounded-md hover:bg-[#d83e27]"
          >
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
}
