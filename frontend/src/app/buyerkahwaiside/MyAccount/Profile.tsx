'use client';

import React from 'react';

export default function Profile() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">My Profile</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            className="w-full p-3 border rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-md"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Date Of Birth
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-md"
            placeholder="Enter your date of birth"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-md"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Gender</label>
          <input
            type="text"
            className="w-full p-3 border rounded-md"
            placeholder="Enter your Gender"
          />
        </div>
        <button
          type="submit"
          className="bg-[#ee4d2d] text-white py-3 px-6 rounded-md hover:bg-[#d83e27]"
        >
          Save
        </button>
      </form>
    </div>
  );
}
