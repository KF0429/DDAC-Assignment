'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface UserDropdownProps {
  username: string;
  handleLogout: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({
  username,
  handleLogout,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Correct type for `div` element

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
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
      ref={dropdownRef} // Use `div` as the container for the dropdown
      className="relative cursor-pointer p-0 select-none justify-center flex items-center text-current list-none"
    >
      <button
        onClick={toggleDropdown}
        className="text-white text-sm font-medium hover:underline focus:outline-none"
      >
        {username}
      </button>
      {showDropdown && (
        <div className="absolute top-full mt-2 right-0 bg-white text-black shadow-md rounded-md">
          <Link
            href="/buyerkahwaiside/MyAccount?page=profile"
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
