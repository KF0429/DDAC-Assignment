import Link from 'next/link';
import { SidebarItem } from '../types/dashboard';

const orderSidebarItem: SidebarItem[] = [
  { name: 'My Orders', href: '/seller/orders' },
  { name: 'Cancellation', href: '/seller/cancellation' },
];

const productSidebarItem: SidebarItem[] = [
  { name: 'My Products', href: '/seller/myproduct' },
  { name: 'Add New Product', href: '/seller/addproduct' },
];

const financeSidebarItem: SidebarItem[] = [
  { name: 'My Income', href: '/seller/income' },
  { name: 'My Balance', href: '/seller/balance' },
  { name: 'Bank Accounts', href: '/seller/bankaccounts' },
];

const shopSidebarItem: SidebarItem[] = [
  { name: 'Shop Rating', href: '/seller/shoprating' },
  { name: 'Shop Information', href: '/seller/shopinformation' },
  { name: 'Shop Categories', href: '/seller/shopcategories' },
];

export function Sidebar() {
  return (
    <nav className="w-55 bg-gray-50 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-bold">Order</h2>
        <ul className="flex flex-col gap-2 list-none pl-4">
          {orderSidebarItem.map((item) => (
            <li key={item.href} className="md-2">
              <Link href={item.href} className="text-xs hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-bold mt-8">Product</h2>
        <ul className="flex flex-col gap-2 list-none pl-4">
          {productSidebarItem.map((item) => (
            <li key={item.href} className="md-2">
              <Link href={item.href} className="text-xs hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-bold mt-8">Finance</h2>
        <ul className="flex flex-col gap-2 list-none pl-4">
          {financeSidebarItem.map((item) => (
            <li key={item.href} className="md-2">
              <Link href={item.href} className="text-xs hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-bold mt-8">Shop</h2>
        <ul className="flex flex-col gap-2 list-none pl-4">
          {shopSidebarItem.map((item) => (
            <li key={item.href} className="md-2">
              <Link href={item.href} className="text-xs hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
