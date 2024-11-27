'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function CompleteRegistrationPage() {
  const searchParams = useSearchParams();
  const phoneNumber = searchParams.get('phone'); // Auto-filled phone number

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: phoneNumber || '',
    gender: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User Registration Data:', formData);
    // Perform backend API call to register the user
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white rounded-md shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Complete Your Registration
        </h2>

        {/* Username */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            placeholder="Enter your username"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            placeholder="Enter your email address"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="password"
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
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="phone"
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

        {/* Gender */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="gender"
          >
            Gender (Optional)
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#ee4d2d] text-white py-3 rounded-md hover:bg-[#d83e27]"
        >
          Complete Registration
        </button>
      </form>
    </div>
  );
}
