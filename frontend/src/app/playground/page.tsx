'use client';

import React, { useState } from 'react';

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    username: 'jiaweikw27',
    email: 'jiawei@gmail.com',
    phone: '0123456789',
    gender: 'Male',
    dob: '1990-01-01',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated Data:', formData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">My Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <div>
          <label htmlFor="username" className="block text-gray-700 font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            disabled
          />
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />
        </div>
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />
        </div>
        {/* Gender */}
        <div>
          <label htmlFor="gender" className="block text-gray-700 font-medium">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        {/* DOB */}
        <div>
          <label htmlFor="dob" className="block text-gray-700 font-medium">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#ee4d2d] text-white py-3 rounded-md hover:bg-[#d83e27]"
        >
          Save
        </button>
      </form>
    </div>
  );
}
