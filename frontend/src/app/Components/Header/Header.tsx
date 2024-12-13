import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import TopNav from './TopNav';
import CartIcon from './CartIcon';
import SearchBar from './SearchBar';

export default function Header() {
  const [userID, setUserID] = useState<number | null>(null);

  useEffect(() => {
    // Function to fetch the userId from localStorage
    const getUserId = () => {
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        const parsedUser = JSON.parse(loggedInUser);
        return parsedUser.userId || null; // Adjust if the key differs
      }
      return null;
    };

    const id = getUserId();
    setUserID(id);
  }, []); // Run only once on component mount

  return (
    <div>
      <header className="bg-transparent min-w-[1200px]">
        <div className="bg-[#d0011b] h-[2.125rem] relative z-[400] min-w-[1200px]">
          <TopNav />
        </div>
        <div className="flex flex-col transition-top duration-100 ease-sharp-motion-curve min-w-[1200px]">
          <div
            className="items-center bg-[#d0011b] border-b-[.0625rem] border-[rgba(0,0,0,.12)] flex pt-[.875rem] 
          pb-[1.3125rem] px-0 z-[300]"
          >
            <div className="items-center box-border flex ml-auto mr-auto w-[1200px]">
              <div
                className="items-center text-[rgba(0,0,0,.87)] flex mr-[.9375rem] opacity-100 no-underline transform 
              duration-[600] ease-sharp-motion-curve"
                style={{ transformOrigin: '-1px -1px' }}
              >
                <Link
                  href={'/'}
                  className="pr-10 relative -top-[.1875rem] box-border no-underline cursor-pointer"
                >
                  <div className="rounded-sm -m-[2px] p-[2px]">
                    <svg
                      viewBox="0 0 192 65"
                      className="h-[50px] w-[162px] block overflow-hidden fill-white relative"
                    >
                      {/* SVG content */}
                    </svg>
                  </div>
                </Link>
              </div>
              <SearchBar />
              <div className="flex-1"></div>
              <div className="items-center flex relative w-[36.875rem]">
                <form action=""></form>
                <div className="items-center flex flex-1 justify-end">
                  {/* Pass the dynamically retrieved userID to the CartIcon */}
                  {userID !== null && <CartIcon userID={userID} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
