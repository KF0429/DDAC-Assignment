import Link from 'next/link'
import { SidebarItem } from '../types/dashboard'

const sidebarItems: SidebarItem[] = [
  { name: "My Products", href: "/seller" },
  { name: "Add New Product", href: "/seller/addproduct" },
  { name: "Product Violations", href: "/seller/violations" },
  { name: "My Inventory", href: "/seller/inventory" },
]

export function Sidebar() {
  return (
    <nav className="w-64 bg-gray-100 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Product</h2>
        <ul>
          {sidebarItems.map((item) => (
            <li key={item.href} className="mb-2">
              <Link href={item.href} className="text-blue-600 hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

