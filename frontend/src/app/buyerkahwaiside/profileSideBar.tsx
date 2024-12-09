'use client';

import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  activeItem: string;
}

export default function ProfileSideBar({ activeItem }: SidebarProps) {
  const menuItems = [
    {
      label: 'Profile',
      id: 'profile',
      href: '/buyerkahwaiside/MyAccount?page=profile',
    },
    {
      label: 'Banks & Cards',
      id: 'banks-cards',
      href: '/buyerkahwaiside/MyAccount?page=bankAndCard',
    },
    {
      label: 'Address',
      id: 'address',
      href: '/buyerkahwaiside/MyAccount?page=address',
    },
    {
      label: 'Change Password',
      id: 'change-password',
      href: '/buyerkahwaiside/MyAccount?page=change-password',
    },
  ];

  return (
    <aside className="w-1/4 bg-white rounded-md shadow p-4">
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
            href="/buyerkahwaiside/MyPurchase"
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
