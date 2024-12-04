'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data
const incomeOverview = {
  toRelease: {
    total: 5000,
  },
  released: {
    thisWeek: 1000,
    thisMonth: 3000,
    total: 10000,
  },
};

const toReleaseOrders = [
  {
    id: '1',
    order: 'ORD001',
    estimateReleaseDate: '2023-07-15',
    status: 'Processing',
    paymentMethod: 'Credit Card',
    payoutAmount: 500,
  },
  {
    id: '2',
    order: 'ORD002',
    estimateReleaseDate: '2023-07-18',
    status: 'Shipped',
    paymentMethod: 'PayPal',
    payoutAmount: 750,
  },
];

const releasedOrders = [
  {
    id: '3',
    order: 'ORD003',
    releaseDate: '2023-07-01',
    paymentMethod: 'Bank Transfer',
    payoutAmount: 600,
  },
  {
    id: '4',
    order: 'ORD004',
    releaseDate: '2023-07-05',
    paymentMethod: 'Credit Card',
    payoutAmount: 400,
  },
];

interface OrderDetails {
  releaseDate: string;
  paymentMethod: string;
  products: {
    name: string;
    unitPrice: number;
    quantity: number;
    subtotal: number;
  }[];
}

const orderDetails: Record<string, OrderDetails> = {
  ORD001: {
    releaseDate: '2023-07-15',
    paymentMethod: 'Credit Card',
    products: [
      { name: 'Product A', unitPrice: 100, quantity: 2, subtotal: 200 },
      { name: 'Product B', unitPrice: 150, quantity: 2, subtotal: 300 },
    ],
  },
  // Add more order details as needed
};

interface Order {
  id: string;
  order: string;
  estimateReleaseDate?: string;
  status?: string;
  paymentMethod: string;
  payoutAmount: number;
}

export default function IncomePage() {
  const [activeTab, setActiveTab] = useState('toRelease');
  const [selectedOrder, setSelectedOrder] = useState<OrderDetails | null>(null);

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(orderDetails[order.order]);
  };

  return (
    <div className="space-y-6">
      {/* Income Overview Section */}
      <Card>
        <CardHeader>
          <CardTitle>Income Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold">To Release</h3>
              <div className="mt-2">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-2xl font-bold">
                  ${incomeOverview.toRelease.total}
                </p>
              </div>
            </div>

            <div className="hidden md:block border-l-2 border-gray-300 h-full my-auto pl-10">
              <h3 className="text-lg font-semibold">Released</h3>
              <div className="mt-2 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold">
                    ${incomeOverview.released.thisWeek}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold">
                    ${incomeOverview.released.thisMonth}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold">
                    ${incomeOverview.released.total}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Income Detail Section */}
      <Card>
        <CardHeader>
          <CardTitle>Income Detail</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="toRelease">To Release</TabsTrigger>
              <TabsTrigger value="released">Released</TabsTrigger>
            </TabsList>
            <TabsContent value="toRelease">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Estimate Release Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Payout Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {toReleaseOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="link"
                              onClick={() => handleOrderClick(order)}
                            >
                              {order.order}
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Payment Information</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <p>
                                <strong>Estimate Release Date:</strong>{' '}
                                {selectedOrder?.releaseDate}
                              </p>
                              <p>
                                <strong>Payment Method:</strong>{' '}
                                {selectedOrder?.paymentMethod}
                              </p>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Product Name</TableHead>
                                    <TableHead>Unit Price</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead>Subtotal</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {selectedOrder?.products.map(
                                    (product, index) => (
                                      <TableRow key={index}>
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell>
                                          ${product.unitPrice}
                                        </TableCell>
                                        <TableCell>
                                          {product.quantity}
                                        </TableCell>
                                        <TableCell>
                                          ${product.subtotal}
                                        </TableCell>
                                      </TableRow>
                                    )
                                  )}
                                </TableBody>
                              </Table>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                      <TableCell>{order.estimateReleaseDate}</TableCell>
                      <TableCell>{order.status}</TableCell>
                      <TableCell>{order.paymentMethod}</TableCell>
                      <TableCell>${order.payoutAmount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="released">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Release Date</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Payout Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {releasedOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="link"
                              onClick={() => handleOrderClick(order)}
                            >
                              {order.order}
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Payment Information</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <p>
                                <strong>Release Date:</strong>{' '}
                                {selectedOrder?.releaseDate}
                              </p>
                              <p>
                                <strong>Payment Method:</strong>{' '}
                                {selectedOrder?.paymentMethod}
                              </p>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Product Name</TableHead>
                                    <TableHead>Unit Price</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead>Subtotal</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {selectedOrder?.products.map(
                                    (product, index) => (
                                      <TableRow key={index}>
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell>
                                          ${product.unitPrice}
                                        </TableCell>
                                        <TableCell>
                                          {product.quantity}
                                        </TableCell>
                                        <TableCell>
                                          ${product.subtotal}
                                        </TableCell>
                                      </TableRow>
                                    )
                                  )}
                                </TableBody>
                              </Table>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                      <TableCell>{order.releaseDate}</TableCell>
                      <TableCell>{order.paymentMethod}</TableCell>
                      <TableCell>${order.payoutAmount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
