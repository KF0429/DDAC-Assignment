'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Mock data for products
const mockProducts = [
  {
    id: 1,
    name: 'Product A',
    price: 19.99,
    stock: 100,
    sales: 50,
    status: 'Live',
  },
  {
    id: 2,
    name: 'Product B',
    price: 29.99,
    stock: 75,
    sales: 25,
    status: 'Live',
  },
  {
    id: 3,
    name: 'Product C',
    price: 39.99,
    stock: 0,
    sales: 100,
    status: 'Sold out',
  },
  {
    id: 4,
    name: 'Product D',
    price: 49.99,
    stock: 50,
    sales: 0,
    status: 'Reviewing',
  },
  {
    id: 5,
    name: 'Product E',
    price: 59.99,
    stock: 25,
    sales: 10,
    status: 'Delisted',
  },
  // Add more mock products as needed
];

type ProductStatus = 'All' | 'Live' | 'Sold out' | 'Reviewing' | 'Delisted';

export default function MyProducts() {
  const [selectedStatus, setSelectedStatus] = useState<ProductStatus>('All');

  const filteredProducts =
    selectedStatus === 'All'
      ? mockProducts
      : mockProducts.filter((product) => product.status === selectedStatus);

  return (
    <div className="space-y-6 min-h-screen p-6">
      <h1 className="text-3xl font-bold">My Products</h1>

      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-wrap gap-2">
          {['All', 'Live', 'Sold out', 'Reviewing', 'Delisted'].map(
            (status) => (
              <Button
                key={status}
                variant={selectedStatus === status ? 'default' : 'outline'}
                onClick={() => setSelectedStatus(status as ProductStatus)}
                className={`
                ${
                  selectedStatus === status
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-white hover:bg-orange-100'
                }
              `}
              >
                {status}
              </Button>
            )
          )}
        </div>
        {selectedStatus === 'All' && (
          <Link href="/seller/addproduct">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              + Add a New Product
            </Button>
          </Link>
        )}
      </div>

      <div className="mb-4">
        <span className="font-semibold">
          Total Products: {filteredProducts.length}
        </span>
      </div>

      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Sales</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id} className="hover:bg-orange-50">
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
