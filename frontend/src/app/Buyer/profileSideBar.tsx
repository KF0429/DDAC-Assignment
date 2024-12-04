'use client';

import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  activeItem: string;
  profileImage?: string; // Marked as optional
  username?: string; // Marked as optional
}
export default function ProfileSideBar({
  activeItem,
  profileImage,
  username,
}: SidebarProps) {
  const menuItems = [
    {
      label: 'Profile',
      id: 'profile',
      href: '/Buyer/MyAccount?page=profile',
    },
    {
      label: 'Banks & Cards',
      id: 'banks-cards',
      href: '/Buyer/MyAccount?page=bankAndCard',
    },
    {
      label: 'Address',
      id: 'address',
      href: '/Buyer/MyAccount?page=address',
    },
    {
      label: 'Change Password',
      id: 'change-password',
      href: '/Buyer/MyAccount?page=change-password',
    },
  ];

  return (
    <aside className="w-1/4 bg-white rounded-md shadow p-4">
      {/* Profile Image and Username */}
      <div className="flex items-center mb-6">
        <img
          src={profileImage || '/placeholder-profile.png'}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-semibold">{username || 'Guest'}</p>
          <p className="text-sm text-blue-500 cursor-pointer">Edit Profile</p>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-4">My Account</h2>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className={`block cursor-pointer font-medium ${
                activeItem === item.id ? 'text-[#ee4d2d]' : 'text-gray-700'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-4">My Purchase</h2>
      <ul className="space-y-2">
        <li>
          <Link
            href="/Buyer/MyPurchase"
            className={`block cursor-pointer font-medium ${
              activeItem === 'orders' ? 'text-[#ee4d2d]' : 'text-gray-700'
            }`}
          >
            Orders
          </Link>
        </li>
      </ul>
    </aside>
  );
}
