'use client';

import { useEffect, useState } from 'react';
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


type Product = {
  id: number;
  productName: string;
  price: number;
  stock: number;
  soldAmount: number;
  sellStatus: ProductStatus;
};

type ProductStatus = 'All' | 'Live' | 'Sold out' | 'Reviewing' | 'Delisted';

export default function MyProducts() {
  const [selectedStatus, setSelectedStatus] = useState<ProductStatus>('All');
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const userId = 1;
  const shopId = 2;

  const filteredProducts =
    selectedStatus === 'All'
      ? products
      : products.filter((product) => product.sellStatus === selectedStatus);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`http://localhost:5088/api/Products/MyProduct/${shopId}`); 
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
                <TableCell className="font-medium">{product.productName}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.soldAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
