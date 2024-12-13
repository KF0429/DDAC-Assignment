'use client';

import React, { useState, useEffect } from 'react';

export default function Profile() {
  const [profileData, setProfileData] = useState({
    userName: '',
    phoneNumber: '',
    email: '',
    address: '',
    dateOfBirth: '',
    gender: '',
    avatar: '', // Add avatar to profileData
  });

  // Backend base URL
  const baseUrl = 'http://localhost:5088'; // Replace with your actual backend base URL

  // Fetch user ID dynamically
  const getUserId = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      return parsedUser.userId || null;
    }
    return null;
  };

  const userId = getUserId();

  // Fetch profile data
  useEffect(() => {
    if (userId) {
      fetch(`${baseUrl}/api/Users/get-profile/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch profile');
          }
          return response.json();
        })
        .then((data) => {
          setProfileData(data);
        })
        .catch((error) => {
          console.error('Error fetching profile:', error);
        });
    }
  }, [userId]);

  // Handle form submission for profile update
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!userId) {
      alert('User ID not found. Please log in again.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('UserName', profileData.userName);
      formData.append('PhoneNumber', profileData.phoneNumber);
      formData.append('Email', profileData.email);
      formData.append('Address', profileData.address);
      formData.append('DateOfBirth', profileData.dateOfBirth);
      formData.append('Gender', profileData.gender);

      const response = await fetch(
        `${baseUrl}/api/Users/update-profile/${userId}`,
        {
          method: 'PUT',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
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
                src={
                  profileData.avatar ||
                  '/my.img.susercontent.com/file/6bbcffe25fe220fe8fde7cdd0322b6b5'
                } // Fallback to a default placeholder
                alt="Profile"
                className="w-full h-full rounded-full object-cover border"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Profile Form Section */}
      <div className="w-2/3">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-md"
              placeholder="Enter your username"
              value={profileData.userName}
              onChange={(e) =>
                setProfileData({ ...profileData, userName: e.target.value })
              }
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
              value={profileData.phoneNumber}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-md"
              placeholder="example@gmail.com"
              value={profileData.email}
              onChange={(e) =>
                setProfileData({ ...profileData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-md"
              placeholder="Enter your address"
              value={profileData.address}
              onChange={(e) =>
                setProfileData({ ...profileData, address: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Date Of Birth
            </label>
            <input
              type="date"
              className="w-full p-3 border rounded-md"
              value={profileData.dateOfBirth?.split('T')[0] || ''} // Display date only
              onChange={(e) =>
                setProfileData({ ...profileData, dateOfBirth: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Gender</label>
            <select
              className="w-full p-3 border rounded-md"
              value={profileData.gender}
              onChange={(e) =>
                setProfileData({ ...profileData, gender: e.target.value })
              }
            >
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
