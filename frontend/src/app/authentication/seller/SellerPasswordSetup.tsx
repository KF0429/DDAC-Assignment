'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SellerPasswordSetupProps {
  phone?: string; // Phone number passed as a prop
}

export default function SellerPasswordSetup({
  phone,
}: SellerPasswordSetupProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    SellerPassword: '', // Matches backend field
    PhoneNumber: phone || '', // Matches backend field
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
      const response = await fetch('http://localhost:5088/api/SellersAuthentication/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          PhoneNumber: formData.PhoneNumber,
          SellerPassword: formData.SellerPassword,
          ShopName: 'None',
          ShopAddress: 'None',
          ShopImage: '', // Send as an empty string instead of null
          ShopEmail: 'None',
          SellerType: 'None',
          CompanyName: 'None',
          BusinessRegistrationNumber: 0,
        }),
      });

      if (response.ok) {
        console.log('Seller registration successful');
        alert('Password setup successful! Redirecting to login page.');

        // Navigate to the login page
        router.push('/authentication/seller?page=login');
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
            Shopee Seller Registration
          </h1>
        </div>
      </header>

      <div className="min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-6 bg-white rounded-md shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Enter Password</h2>

          {/* Phone Number (Readonly) */}
          <div className="mb-4">
            <label
              htmlFor="PhoneNumber"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="PhoneNumber"
              name="PhoneNumber" // Matches backend field
              value={formData.PhoneNumber}
              readOnly
              className="w-full p-3 border rounded-md bg-gray-100"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="SellerPassword"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="SellerPassword"
              name="SellerPassword" // Matches backend field
              value={formData.SellerPassword}
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
