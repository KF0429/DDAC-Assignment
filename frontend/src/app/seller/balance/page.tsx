'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
const initialSellerBalance = 10000;
const bankAccount = {
  name: 'Bank of America',
  isDefault: true,
  lastFourDigits: '1234',
};

const initialTransactions = [
  {
    id: 1,
    date: '2023-07-10',
    type: 'Sale',
    orderId: 'ORD001',
    flow: 'Money In',
    amount: 500,
    status: 'Completed',
  },
  {
    id: 2,
    date: '2023-07-09',
    type: 'Withdrawal',
    orderId: 'WTH001',
    flow: 'Money Out',
    amount: -1000,
    status: 'Pending',
  },
  {
    id: 3,
    date: '2023-07-08',
    type: 'Refund',
    orderId: 'REF001',
    flow: 'Money Out',
    amount: -200,
    status: 'Completed',
  },
  {
    id: 4,
    date: '2023-07-07',
    type: 'Sale',
    orderId: 'ORD002',
    flow: 'Money In',
    amount: 750,
    status: 'Completed',
  },
];

export default function BalancePage() {
  const [sellerBalance, setSellerBalance] = useState(initialSellerBalance);
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [withdrawalMethod, setWithdrawalMethod] = useState('');
  const [transactionType, setTransactionType] = useState('All');
  const [searchOrderId, setSearchOrderId] = useState('');
  const [transactions, setTransactions] = useState(initialTransactions);
  const [isWithdrawDialogOpen, setIsWithdrawDialogOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const filteredTransactions = transactions.filter((transaction) => {
    if (transactionType !== 'All' && transaction.flow !== transactionType)
      return false;
    if (
      searchOrderId &&
      !transaction.orderId.toLowerCase().includes(searchOrderId.toLowerCase())
    )
      return false;
    return true;
  });

  const totalAmount = filteredTransactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawalAmount);
    if (isNaN(amount) || amount <= 0) {
      setFeedbackMessage('Please enter a valid withdrawal amount.');
      return;
    }
    if (amount > sellerBalance) {
      setFeedbackMessage(
        'The withdrawal amount exceeds your available balance.'
      );
      return;
    }

    // Process withdrawal
    const newBalance = sellerBalance - amount;
    setSellerBalance(newBalance);

    // Add new transaction
    const newTransaction = {
      id: transactions.length + 1,
      date: new Date().toISOString().split('T')[0],
      type: 'Withdrawal',
      orderId: `WTH${Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, '0')}`,
      flow: 'Money Out',
      amount: -amount,
      status: 'Pending',
    };
    setTransactions([newTransaction, ...transactions]);

    // Reset form and close dialog
    setWithdrawalAmount('');
    setWithdrawalMethod('');
    setIsWithdrawDialogOpen(false);

    setFeedbackMessage(
      `$${amount.toFixed(2)} has been withdrawn from your account.`
    );
  };

  return (
    <div className="space-y-6 ">
      {/* Balance Overview Section */}
      <Card>
        <CardHeader>
          <CardTitle>Balance Overview</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Seller Balance</h3>
            <div className="flex items-center mt-2">
              <p className="text-3xl font-bold mr-4">
                ${sellerBalance.toFixed(2)}
              </p>
              <Dialog
                open={isWithdrawDialogOpen}
                onOpenChange={setIsWithdrawDialogOpen}
              >
                <DialogTrigger asChild>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Withdraw
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Withdrawal</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <label htmlFor="amount">Amount</label>
                      <Input
                        id="amount"
                        placeholder="Enter amount"
                        value={withdrawalAmount}
                        onChange={(e) => setWithdrawalAmount(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="method">Withdrawal Method</label>
                      <Select
                        value={withdrawalMethod}
                        onValueChange={setWithdrawalMethod}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bank">Bank Transfer</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-end space-x-4">
                      <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                        onClick={handleWithdraw}
                      >
                        Withdraw
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex-1 ml-8 hidden md:block border-l-2 border-gray-300 h-full my-auto pl-10">
            <h3 className="text-lg font-semibold">My Bank Account</h3>
            <div className="mt-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p>{bankAccount.name}</p>
                <p>{bankAccount.isDefault ? 'Default' : ''}</p>
                <p>****{bankAccount.lastFourDigits}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions Section */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={transactionType} onValueChange={setTransactionType}>
            <TabsList>
              <TabsTrigger value="All">All</TabsTrigger>
              <TabsTrigger value="Money In">Money In</TabsTrigger>
              <TabsTrigger value="Money Out">Money Out</TabsTrigger>
            </TabsList>
            <div className="pl-4 mt-4 flex justify-between items-center mb-4">
              <div>
                <span>{filteredTransactions.length} Transactions</span>
                <span
                  className={`ml-2 font-bold ${
                    totalAmount >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  Total: ${totalAmount.toFixed(2)}
                </span>
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Search Order ID"
                  value={searchOrderId}
                  onChange={(e) => setSearchOrderId(e.target.value)}
                />
              </div>
            </div>
            <TabsContent value={transactionType}>
              <Table>
                <TableHeader className="bg-grey-50">
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type (Description)</TableHead>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Money Flow</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell>{transaction.orderId}</TableCell>
                      <TableCell>{transaction.flow}</TableCell>
                      <TableCell
                        className={
                          transaction.amount >= 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }
                      >
                        ${Math.abs(transaction.amount).toFixed(2)}
                      </TableCell>
                      <TableCell>{transaction.status}</TableCell>
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
