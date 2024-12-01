'use client';

import React from 'react';
import TopNav from '@/app/Components/Header/TopNav';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Include TopNav */}
      <TopNav />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white rounded-md shadow p-4">
          <h2 className="text-lg font-semibold mb-4">My Account</h2>
          <ul className="space-y-2">
            <li className="text-[#ee4d2d] font-medium cursor-pointer">
              Profile
            </li>
            <li className="text-gray-700 font-medium cursor-pointer">
              Banks & Cards
            </li>
            <li className="text-gray-700 font-medium cursor-pointer">
              Addresses
            </li>
            <li className="text-gray-700 font-medium cursor-pointer">
              Change Password
            </li>
            <li className="text-gray-700 font-medium cursor-pointer">
              Notification Settings
            </li>
            <li className="text-gray-700 font-medium cursor-pointer">
              Privacy Settings
            </li>
          </ul>
          <h2 className="text-lg font-semibold mt-6 mb-4">My Purchase</h2>
          <ul className="space-y-2">
            <li className="text-gray-700 font-medium cursor-pointer">Orders</li>
          </ul>
        </aside>

        {/* Main Content */}
        <section className="w-3/4 bg-white rounded-md shadow p-6 ml-4">
          <h2 className="text-xl font-semibold mb-4">My Profile</h2>
          <form>
            {/* Username */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-md"
                placeholder="jiaweikw27"
              />
            </div>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-md"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border rounded-md"
                placeholder="example@gmail.com"
              />
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Gender
              </label>
              <div className="flex items-center space-x-4">
                <label>
                  <input type="radio" name="gender" className="mr-2" />
                  Male
                </label>
                <label>
                  <input type="radio" name="gender" className="mr-2" />
                  Female
                </label>
                <label>
                  <input type="radio" name="gender" className="mr-2" />
                  Other
                </label>
              </div>
            </div>

            {/* Date of Birth */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Date of Birth
              </label>
              <div className="flex space-x-4">
                <select className="p-3 border rounded-md">
                  <option>Date</option>
                  {/* Add date options */}
                </select>
                <select className="p-3 border rounded-md">
                  <option>Month</option>
                  {/* Add month options */}
                </select>
                <select className="p-3 border rounded-md">
                  <option>Year</option>
                  {/* Add year options */}
                </select>
              </div>
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="bg-[#ee4d2d] text-white py-3 px-6 rounded-md hover:bg-[#d83e27]"
            >
              Save
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
