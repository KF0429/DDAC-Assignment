'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface SidebarProps {
  activeItem: string;
  username?: string; // Marked as optional
}

export default function ProfileSideBar({
  activeItem,
  username,
}: SidebarProps) {
  const [showAccountMenu, setShowAccountMenu] = useState(true); // Default is open
  const [showPurchaseMenu, setShowPurchaseMenu] = useState(false); // Default is closed

  const accountMenuItems = [
    {
      label: 'Profile',
      id: 'profile',
      href: '/Buyer/MyAccount?page=profile',
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
      {/* My Account Section */}
      <div>
        <h2
          className="text-lg font-semibold mb-4 cursor-pointer"
          onClick={() => setShowAccountMenu((prev) => !prev)}
        >
          My Account
        </h2>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            showAccountMenu ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <ul className="space-y-2">
            {accountMenuItems.map((item) => (
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
        </div>
      </div>

      {/* My Purchase Section */}
      <div>
        <h2
          className="text-lg font-semibold mt-6 mb-4 cursor-pointer"
          onClick={() => setShowPurchaseMenu((prev) => !prev)}
        >
          My Purchase
        </h2>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            showPurchaseMenu ? 'max-h-screen' : 'max-h-0'
          }`}
        >
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
        </div>
      </div>
    </aside>
  );
}
