'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useEffect, useState } from 'react';

type Order = {
  orderID: number;
  userID: number;
  orderDate: string;
  status: string;
  productName: string;
  total: number;
};

export default function MyProducts() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState<string | null>(null);
  const userId = 1;

  const statusCounts = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5088/api/Orders/Seller/MainPage/${userId}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data);
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

    fetchOrders();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Orders Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(statusCounts).map(([status, count], index) => (
              <li
                key={index}
                className="flex items-center justify-between p-3 bg-muted rounded-lg"
              >
                <span className="font-medium">{status}</span>
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm font-semibold">
                  {count}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
