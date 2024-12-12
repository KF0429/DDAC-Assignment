'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Order = {
  orderID: number;
  userID: number;
  orderDate: string;
  status: string;
  productName: string;
  total: number;
};

type viewOptions =
  | 'All'
  | 'Unpaid'
  | 'To Ship'
  | 'Shipping'
  | 'Completed'
  | 'Return/Refund'
  | 'Failed Delivery';

export default function MyOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState<string | null>(null);
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<viewOptions>('All');
  const userId = 1;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5088/api/Orders/Seller/MyOrder/${userId}`
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

  const updateOrderStatus = async (orderId: number, newStatus: string) => {
    try {
      const response = await fetch(
        `http://localhost:5088/api/Orders/${orderId}/status`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newStatus),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update order status');
      }

      const result = await response.json();
      console.log(result.Message);

      // Update the order status locally
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.orderID === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = () => {
    if (editingOrder) {
      updateOrderStatus(editingOrder.orderID, editingOrder.status);
    }
    setEditingOrder(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredOrders =
    selectedStatus === 'All'
      ? orders
      : orders.filter((x) => x.status === selectedStatus);

  const handleEdit = (order: Order) => {
    setEditingOrder({ ...order });
  };

  return (
    <div className="space-y-6 min-h-screen p-6">
      <h1 className="text-3xl font-bold">My Orders</h1>

      {/* View options */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-wrap gap-2">
          {[
            'All',
            'Unpaid',
            'To Ship',
            'Shipping',
            'Completed',
            'Return/Refund',
            'Failed Delivery',
          ].map((status) => (
            <Button
              key={status}
              variant={selectedStatus === status ? 'default' : 'outline'}
              onClick={() => setSelectedStatus(status as viewOptions)}
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
          ))}
        </div>
      </div>

      {/* Item count */}
      <div className="mb-4">
        <span className="font-semibold">
          Total Products: {filteredOrders.length}
        </span>
      </div>

      {/* Orders table */}
      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product(s)</TableHead>
              <TableHead>Order Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.orderID}>
                <TableCell>{order.productName}</TableCell>
                <TableCell>RM{order.total}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.orderDate.toString()}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" onClick={() => handleEdit(order)}>
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white">
                      <DialogHeader>
                        <DialogTitle>Edit Order</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="products" className="text-right">
                            Products
                          </Label>
                          <Label className="col-span-3">
                            {editingOrder?.productName || ''}
                          </Label>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4 mt-1">
                          <Label htmlFor="total" className="text-right">
                            Total
                          </Label>
                          <Label className="col-span-3">
                            {editingOrder?.total || ''}
                          </Label>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="status" className="text-right">
                            Status
                          </Label>
                          <Select
                            value={editingOrder?.status || ''}
                            onValueChange={(value) =>
                              setEditingOrder(
                                (prev) =>
                                  prev
                                    ? { ...prev, status: value } // Ensure `prev` exists and update `status`
                                    : null // Handle the case where `editingOrder` is null
                              )
                            }
                          >
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Select a status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Unpaid">Unpaid</SelectItem>
                              <SelectItem value="To Ship">To Ship</SelectItem>
                              <SelectItem value="Shipping">Shipping</SelectItem>
                              <SelectItem value="Completed">
                                Completed
                              </SelectItem>
                              <SelectItem value="Return/Refund">
                                Return/Refund
                              </SelectItem>
                              <SelectItem value="Failed Delivery">
                                Failed Delivery
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4 mt-1">
                          <Label htmlFor="orderDate" className="text-right">
                            Order Date
                          </Label>
                          <Label className="col-span-3">
                            {editingOrder?.orderDate || ''}
                          </Label>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button onClick={handleSave}>Save changes</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
