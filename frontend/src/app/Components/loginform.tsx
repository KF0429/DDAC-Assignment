'use client';

import React, { useState } from 'react';

interface LoginFormProps {
  userType: 'buyer' | 'seller'; // Type of user (Buyer or Seller)
  onSubmit: (formData: { emailOrPhone: string; password: string }) => void;
  navigateToRegister: () => void;
}

export default function LoginForm({
  userType,
  onSubmit,
  navigateToRegister,
}: LoginFormProps) {
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
    onSubmit(formData); // Pass form data to the parent component
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">
        {userType === 'buyer' ? 'Buyer Login' : 'Seller Login'}
      </h2>

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
        {userType === 'buyer' ? 'Log In as Buyer' : 'Log In as Seller'}
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
          New to Shopee? Register as {userType === 'buyer' ? 'Buyer' : 'Seller'}
        </button>
      </div>
    </form>
  );
}
