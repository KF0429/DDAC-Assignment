'use client';

import { ShoppingBag, ChevronDown, LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Home } from 'lucide-react';
import Link from 'next/link';

interface User {
  userName: string;
  phoneNumber: string;
  email: string;
  address: string;
  dateOfBirth: string;
  gender: string;
  avatar: string;
}

function BreadcrumbText() {
  const pathname = usePathname();

  const getBreadcrumbText = (path: string) => {
    const parts = path.split('/').filter(Boolean);
    if (parts.length === 1) return 'Shopee Seller Centre';

    const currentPage = parts[parts.length - 1]
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    if (currentPage === 'Orders') return `Home > My Orders`;
    else if (currentPage === 'Myproduct') return `Home > My Products`;
    else if (currentPage === 'Addproduct') return `Home > Add New Product`;
    else if (currentPage === 'Income') return `Home > My Income`;
    else if (currentPage === 'Balance') return `Home > My Balance`;
    else if (currentPage === 'Bankaccounts') return `Home > Bank Accounts`;
    else if (currentPage === 'Shoprating') return `Home > Shop Rating`;
    else if (currentPage === 'Shopinformation')
      return `Home > Shop Information`;
    else if (currentPage === 'Shopcategories') return `Home > Shop Categories`;
    else return `Home > ${currentPage}`;
  };

  return (
    <h1 className="font-semibold text-xl">{getBreadcrumbText(pathname)}</h1>
  );
}

export function Banner() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setuser] = useState<User []| null>(null);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState<string | null>(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5088/api/Users/get-profile/${userId}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          setuser([data]); // Wrap in an array if it's a single object
        } else {
          setuser(data);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchIncomes();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center w-full h-14">
      <header className="flex lg:h-[60px] items-center gap-4 px-6">
        <Link
          href="/seller"
          className="flex items-center gap-2 hover:opacity-75 transition-opacity"
        >
          <Home size={24} />
        </Link>
        <div className="flex-1">
          <BreadcrumbText />
        </div>
      </header>
      <main className="flex-1 overflow-auto p-6"></main>
      {user.map((user) => (
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center focus:outline-none"
          >
            {user.userName}
            <ChevronDown className="ml-1" />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <Link href="/">
                <button
                  onClick={() => {
                    // Implement logout functionality here
                    console.log('Logging out...');
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  <LogOut className="inline mr-2" size={16} />
                  Logout
                </button>
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
