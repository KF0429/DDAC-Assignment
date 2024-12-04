'use client';

import { useState } from 'react';
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
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Mock data for the table
const initialOrders = [
  {
    id: '1',
    products: 'Product A',
    total: '$100',
    status: 'To Ship',
    countdown: '2 days',
  },
  {
    id: '2',
    products: 'Product B',
    total: '$150',
    status: 'Shipping',
    countdown: 'N/A',
  },
  {
    id: '3',
    products: 'Product C',
    total: '$200',
    status: 'Completed',
    countdown: 'N/A',
  },
  // Add more mock orders as needed
];

interface Order {
  id: string;
  products: string;
  total: string;
  status: string;
  countdown: string;
}

type viewOptions =
  | 'All'
  | 'Unpaid'
  | 'To Ship'
  | 'Shipping'
  | 'Completed'
  | 'Return/Refund'
  | 'Failed Delivery';

export default function MyOrders() {
  const [orders, setOrders] = useState(initialOrders);
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<viewOptions>('All');

  const filteredOrders =
    selectedStatus === 'All'
      ? initialOrders
      : initialOrders.filter((product) => product.status === selectedStatus);

  const handleEdit = (order: Order) => {
    setEditingOrder({ ...order });
  };

  const handleSave = () => {
    if (editingOrder) {
      setOrders(
        orders.map((order) =>
          order.id === editingOrder.id ? editingOrder : order
        )
      );
    }
    setEditingOrder(null);
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
              <TableHead>Countdown</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.products}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.countdown}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" onClick={() => handleEdit(order)}>
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Order</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="products" className="text-right">
                            Products
                          </Label>
                          <Input
                            id="products"
                            value={editingOrder?.products || ''}
                            onChange={(e) =>
                              setEditingOrder(
                                (prev) =>
                                  prev
                                    ? {
                                        ...prev,
                                        products: e.target.value,
                                      }
                                    : null // Ensure fallback to null if editingOrder is null
                              )
                            }
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="total" className="text-right">
                            Total
                          </Label>
                          <Input
                            id="total"
                            value={editingOrder?.total || ''}
                            onChange={(e) =>
                              setEditingOrder(
                                (prev) =>
                                  prev
                                    ? { ...prev, total: e.target.value } // Ensure we only modify a valid `editingOrder`
                                    : null // Handle the case where `editingOrder` is null
                              )
                            }
                            className="col-span-3"
                          />
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
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="countdown" className="text-right">
                            Countdown
                          </Label>
                          <Input
                            id="countdown"
                            value={editingOrder?.countdown || ''}
                            onChange={(e) =>
                              setEditingOrder(
                                (prev) =>
                                  prev
                                    ? { ...prev, countdown: e.target.value } // Update `countdown` while retaining all other fields
                                    : null // Handle the case where `editingOrder` is null
                              )
                            }
                            className="col-span-3"
                          />
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
