'use client';

import React, { useState } from 'react';

export default function Profile() {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="flex">
      {/* Profile Image Section */}
      <div className="w-1/3 pr-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-4">My Profile</h2>
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <div className="w-32 h-32 mb-4">
              <img
                src={profileImage || '/placeholder-profile.png'} // Default placeholder
                alt="Profile"
                className="w-full h-full rounded-full object-cover border"
              />
            </div>

            {/* Select Image Button */}
            <label
              htmlFor="profileImageUpload"
              className="px-4 py-2 bg-[#ee4d2d] text-white rounded cursor-pointer"
            >
              Select Image
            </label>
            <input
              type="file"
              id="profileImageUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />

            {/* File Information */}
            <p className="text-sm text-gray-500 mt-2">
              File size: maximum 1 MB <br />
              File extension: .JPEG, .PNG
            </p>
          </div>
        </div>
      </div>

      {/* Profile Form Section */}
      <div className="w-2/3">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-md"
              placeholder="Enter your username"
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
              type="date"
              className="w-full p-3 border rounded-md"
              placeholder="Enter your date of birth"
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Gender
            </label>
            <select className="w-full p-3 border rounded-md">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#ee4d2d] text-white py-3 px-6 rounded-md hover:bg-[#d83e27]"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
