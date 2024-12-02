'use client'

import { ShoppingBag, ChevronDown, LogOut } from 'lucide-react'
import { useState } from 'react'
import { User } from '../types/dashboard'

export function Banner({ user, currentPage }: { user: User; currentPage: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center w-full">
      <div className="flex items-center">
        <ShoppingBag className="mr-2" />
        <span>Home &gt; {currentPage}</span>
      </div>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center focus:outline-none"
        >
          {user.name}
          <ChevronDown className="ml-1" />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
            <button
              onClick={() => {
                // Implement logout functionality here
                console.log('Logging out...')
              }}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <LogOut className="inline mr-2" size={16} />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

