import React from 'react';
import Link from 'next/link';

export default function TopNav() {
  return (
    <div>
      <nav className="mr-auto ml-auto max-w-[1200px] text-white items-center flex">
        <div className="flex items-center">
          <Link
            href="/seller"
            className="text-white text-sm font-light outline-0 overflow-visible p-1 relative no-underline"
          >
            Seller Centre
          </Link>
        </div>
        <div className="flex-1"></div>
        <ul className="items-center flex h-[2.125rem] list-none m-0 p-0">
          <li className="cursor-pointer p-0 select-none justify-center relative flex items-center text-current list-none">
            <div>
              <div className="relative">
                <div>
                  <Link
                    href={''}
                    className="pointer-events-none text-current py-1.5 px-0 items-center flex no-underline cursor-pointer"
                  >
                    <svg
                      viewBox="3 2.5 14 14"
                      x="0"
                      y="0"
                      className="overflow-hidden h-5 w-[0.875rem] inline-block fill-current relative"
                    >
                      <path d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z"></path>
                      <path d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z"></path>
                    </svg>
                    <span className="text-[.8125rem] font-light ml-[.3125rem] capitalize">
                      Notification
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <Link
            href={'/register'}
            className="cursor-pointer text-current normal-case font-medium items-center flex text-[.8125rem] select-none justify-center py-0 px-2.5 relative no-underline list-none"
          >
            Sign Up
          </Link>
          <div className="border-r border-customhsla h-[.8125rem] list-none text-white"></div>
          <Link
            href={''}
            className="cursor-pointer text-current normal-case font-medium items-center flex text-[.8125rem] select-none justify-center py-0 px-2.5 relative no-underline list-none"
          >
            Login
          </Link>
        </ul>
      </nav>
    </div>
  );
}
