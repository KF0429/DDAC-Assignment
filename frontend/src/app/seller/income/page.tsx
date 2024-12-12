'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data
const incomeOverview = {
  toRelease: {
    total: 0,
  },
  released: {
    thisWeek: 0,
    thisMonth: 0,
    total: 0,
  },
};

interface Income {
  transactionID: number;
  userID: number;
  estimatedDate: string;
  paymentMethod: string;
  amount: number;
  moneyFlow: string;
  status: string;
}

export default function IncomePage() {
  const [activeTab, setActiveTab] = useState('toRelease');
  const [income, setIncome] = useState<Income[]>([]);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState<string | null>(null);
  const userId = 1;

  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5088/api/Transaction/Income/${userId}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setIncome(data);
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

    fetchIncomes();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Helper function to calculate total amounts
  const calculateTotal = (transactions: Income[], status: string) => {
    return transactions
      .filter((transaction) => transaction.status === status)
      .reduce((total, transaction) => total + transaction.amount, 0);
  };

  // Helper function to calculate totals for released incomes based on date
  const calculateReleasedTotal = (transactions: Income[], timeFrame: 'thisWeek' | 'thisMonth' | 'total') => {
    const now = new Date();
    return transactions
      .filter((transaction) => transaction.status === 'Completed')
      .filter((transaction) => {
        const releaseDate = new Date(transaction.estimatedDate);
        if (timeFrame === 'thisWeek') {
          const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay())); // Start of this week
          return releaseDate >= startOfWeek;
        } else if (timeFrame === 'thisMonth') {
          return releaseDate.getMonth() === now.getMonth() && releaseDate.getFullYear() === now.getFullYear();
        } else {
          return true; // For total, just check if it's completed
        }
      })
      .reduce((total, transaction) => total + transaction.amount, 0);
  };

  // Calculate the "To Release" total and the "Released" totals dynamically
  incomeOverview.toRelease.total = calculateTotal(income, 'Pending'); // Assuming "Pending" means to release
  incomeOverview.released.thisWeek = calculateReleasedTotal(income, 'thisWeek');
  incomeOverview.released.thisMonth = calculateReleasedTotal(income, 'thisMonth');
  incomeOverview.released.total = calculateReleasedTotal(income, 'total');

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
                  RM{incomeOverview.toRelease.total}
                </p>
              </div>
            </div>

            <div className="hidden md:block border-l-2 border-gray-300 h-full my-auto pl-10">
              <h3 className="text-lg font-semibold">Released</h3>
              <div className="mt-2 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold">
                    RM{incomeOverview.released.thisWeek}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold">
                    RM{incomeOverview.released.thisMonth}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold">
                    RM{incomeOverview.released.total}
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

            {/* To Release Tab */}
            <TabsContent value="toRelease">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Estimate Release Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Payout Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {income
                    .filter((transaction) => transaction.status !== 'Completed') // Exclude completed orders
                    .map((transaction) => (
                      <TableRow key={transaction.transactionID}>
                        <TableCell>{transaction.transactionID}</TableCell>
                        <TableCell>{transaction.estimatedDate}</TableCell>
                        <TableCell>{transaction.status}</TableCell>
                        <TableCell>{transaction.paymentMethod}</TableCell>
                        <TableCell>RM{transaction.amount}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>

            {/* Released Tab */}
            <TabsContent value="released">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Release Date</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Payout Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {income
                    .filter((transaction) => transaction.status === 'Completed') // Only show completed orders
                    .map((transaction) => (
                      <TableRow key={transaction.transactionID}>
                        <TableCell>{transaction.transactionID}</TableCell>
                        <TableCell>{transaction.estimatedDate}</TableCell>
                        <TableCell>{transaction.paymentMethod}</TableCell>
                        <TableCell>RM{transaction.amount}</TableCell>
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
