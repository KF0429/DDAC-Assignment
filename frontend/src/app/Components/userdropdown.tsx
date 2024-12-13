'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface UserDropdownProps {
  username: string;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ username }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fetch user profile image
  useEffect(() => {
    const getUserId = () => {
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        const parsedUser = JSON.parse(loggedInUser);
        return parsedUser.userId || null;
      }
      return null;
    };

    const userId = getUserId();
    if (userId) {
      fetch(`http://localhost:5088/api/Users/get-profile/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch profile');
          }
          return response.json();
        })
        .then((data) => {
          setProfileImage(data.avatar);
        })
        .catch((error) => {
          console.error('Error fetching profile image:', error);
        });
    }
  }, []);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();
    // Optionally redirect to login or homepage
    window.location.href = '/';
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative cursor-pointer p-0 select-none flex items-center text-current list-none"
    >
      <div
        className="flex items-center gap-2"
        onClick={toggleDropdown}
        aria-hidden="true"
      >
        {/* Profile Image */}
        <img
          src={profileImage || '/placeholder-profile.png'}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
        {/* Username */}
        <span className="text-white text-sm font-medium">{username}</span>
      </div>
      {showDropdown && (
        <div className="absolute top-full mt-2 right-0 bg-white text-black shadow-md rounded-md">
          <Link
            href="/Buyer/MyAccount?page=profile"
            className="block px-4 py-2 hover:bg-gray-200"
          >
            My Profile
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
