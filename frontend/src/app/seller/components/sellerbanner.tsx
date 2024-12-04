'use client'

import { ShoppingBag, ChevronDown, LogOut } from 'lucide-react'
import { useState } from 'react'
import { User } from '../types/dashboard'
import { usePathname } from 'next/navigation'
import { Home } from 'lucide-react'
import Link from 'next/link'

function BreadcrumbText() {
  const pathname = usePathname()
  
  const getBreadcrumbText = (path: string) => {
    const parts = path.split('/').filter(Boolean)
    if (parts.length === 1) return 'Shopee Seller Centre'
    
    const currentPage = parts[parts.length - 1]
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    return `Home > ${currentPage}`
  }

  return <h1 className="font-semibold text-xl">{getBreadcrumbText(pathname)}</h1>
}

export function Banner({ user, currentPage }: { user: User; currentPage: string }) {
  const [isOpen, setIsOpen] = useState(false)

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
                console.log('Logging out...');
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

