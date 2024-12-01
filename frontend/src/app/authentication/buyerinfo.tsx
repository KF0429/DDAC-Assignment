'use client';

import React, { useState } from 'react';
import { SiShopee } from 'react-icons/si';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

interface BuyerPageProps {
  phone?: string; // Allow undefined as a valid type
}

export default function BuyerPage({ phone }: BuyerPageProps) {
  const router = useRouter(); // Initialize the router
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: phone || '', // Pre-fill phone number if provided
    address: '',
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
    console.log('Buyer Registration Data:', formData);
    alert('Registration Successful!');

    // Navigate to the login page
    router.push('/authentication?page=login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white py-4 shadow">
        <div className="max-w-6xl mx-auto px-4 flex items-center space-x-4">
          {/* Shopee Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <SiShopee size={40} color="#ee4d2d" />
            <h1 className="text-3xl font-medium text-[#ee4d2d]"></h1>
          </Link>

          {/* Registration Title */}
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
            Complete Your Registration
          </h2>
          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
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
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
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
              required
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

          {/* Phone */}
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
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-medium mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              placeholder="Enter your address"
              required
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-gray-700 font-medium mb-2"
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
    </div>
  );
}
