'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import UserDropdown from '@/app/Components/userdropdown';
import { useRouter } from 'next/navigation';

export default function TopNav() {
  const [loggedInUser, setLoggedInUser] = useState<{ username: string } | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    // Retrieve the logged-in user from local storage
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      setLoggedInUser(JSON.parse(user)); // Parse the JSON and update state
    }
  }, []);

  const handleLogout = () => {
    // Clear user from local storage and reset state
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    alert('You have been logged out.');
  };

  const goToSeller = () => {
    router.push('/authentication/seller?page=login');
  };

  return (
    <div>
      <nav className="mr-auto ml-auto max-w-[1200px] text-white items-center flex">
        <div className="flex items-center">
          {/* Seller Centre Navigation Button */}
          <button
            onClick={goToSeller}
            className="text-white text-sm font-light outline-0 overflow-visible p-1 relative no-underline"
          >
            Seller Centre
          </button>
        </div>
        <div className="flex-1"></div>
        <ul className="items-center flex h-[2.125rem] list-none m-0 p-0">
          {loggedInUser ? (
            <UserDropdown
              username={loggedInUser.username} // Pass username to dropdown
              handleLogout={handleLogout}
            />
          ) : (
            <>
              <Link
                href={'/authentication?page=register'}
                className="cursor-pointer text-current normal-case font-medium items-center flex text-[.8125rem] select-none justify-center py-0 px-2.5 relative no-underline list-none"
              >
                Sign Up
              </Link>
              <div className="border-r border-customhsla h-[.8125rem] list-none text-white"></div>
              <Link
                href={'/authentication?page=login'}
                className="cursor-pointer text-current normal-case font-medium items-center flex text-[.8125rem] select-none justify-center py-0 px-2.5 relative no-underline list-none"
              >
                Login
              </Link>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
