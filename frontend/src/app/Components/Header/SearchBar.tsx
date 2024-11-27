"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/search/${encodeURIComponent(searchQuery)}`);
    }
  };
  return (
    <div>
      <div className="flex  flex-col justify-start relative w-[840px]">
        <form
          onSubmit={handleSubmit}
          tabIndex={-1}
          style={{ outlineOffset: "var(--focus-indicator-spacing)" }}
          className="shadow-search w-full items-stretch bg-white rounded-sm box-border flex h-10 justify-between p-[.1875rem] mt-0
          focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 focus-within:outline-none"
        >
          <div
            style={{ outlineOffset: "var(--focus-indicator-spacing)" }}
            className="relative flex flex-1"
          >
            <div className="bg-white border-white box-border flex flex-1 py-0 px-[.625rem] relative">
              <input
                className="items-center border-0 flex flex-1 m-0 outline-none p-0  leading-normal overflow-clip"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter search keyword"
              />
            </div>
          </div>
          <button
            type="button"
            className="bg-[#fb5533] outline-0 overflow-visible relative h-[34px] 
          max-w-[190px] min-w-[60px] py-0 px-[15px] inline-flex text-ellipsis items-center border-0 rounded-sm shadow-ssm
          box-border cursor-pointer flex-col text-sm justify-center capitalize"
          >
            <svg
              height="19"
              viewBox="0 0 19 19"
              width="19"
              className="inline-block h-[1em] w-[1em] fill-current relative text-white cursor-pointer text-sm capitalize"
            >
              <g fillRule="evenodd" stroke="none" strokeWidth={1}>
                <g transform="translate(-1016 -32)">
                  <g>
                    <g transform="translate(405 21)">
                      <g transform="translate(611 11)">
                        <path d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z"></path>
                        <path d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
