'use client';

import React from 'react';

export default function ChangePassword() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            New Password
          </label>
          <input
            type="password"
            className="w-full p-3 border rounded-md"
            placeholder="Enter new password"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full p-3 border rounded-md"
            placeholder="Confirm your password"
          />
        </div>
        <button
          type="submit"
          className="bg-[#ee4d2d] text-white py-3 px-6 rounded-md hover:bg-[#d83e27]"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
