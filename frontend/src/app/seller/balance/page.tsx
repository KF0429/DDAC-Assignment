'use client';

import { useEffect, useState } from 'react';
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

interface BankAccount {
  userID: number;
  bankName: string;
  accountNumber: number;
  default: boolean;
}

interface SellerBalanceDB {
  transactionID: number;
  userID: number;
  balance: number;
}

interface Transaction {
  transactionID: number;
  createdOn: string;
  description: string;
  orderId: string;
  moneyFlow: string;
  amount: number;
  status: string;
}

export default function BalancePage() {
  const [sellerBalance, setSellerBalance] = useState(0);
  const [sellerBalanceDB, setSellerBalanceDB] = useState<SellerBalanceDB[]>([]);
  const [bankAccount, setbankAccount] = useState<BankAccount[]>([]);
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [withdrawalMethod, setWithdrawalMethod] = useState('');
  const [transactionType, setTransactionType] = useState('All');
  const [searchOrderId, setSearchOrderId] = useState('');
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isWithdrawDialogOpen, setIsWithdrawDialogOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState<string | null>(null);

  const userId = 1;

  // Fetch transactions from the backend API

  useEffect(() => {
    const fetchTransactionsAndBalance = async () => {
      try {
        setLoading(true);
        const [balanceResponse, transactionsResponse, bankAccountResponce] =
          await Promise.all([
            fetch(`http://localhost:5088/api/Sellers/Balance/${userId}`),
            fetch(`http://localhost:5088/api/Transaction/Balance/${userId}`),
            fetch(`http://localhost:5088/api/BankAccount/Default/${userId}`),
          ]);

        if (
          !balanceResponse.ok ||
          !transactionsResponse.ok ||
          !bankAccountResponce.ok
        ) {
          throw new Error('Failed to fetch data');
        }

        const balanceData = await balanceResponse.json();
        const transactionsData = await transactionsResponse.json();
        const bankAccountData = await bankAccountResponce.json();

        setSellerBalanceDB(balanceData);
        setTransactions(transactionsData);
        setbankAccount(bankAccountData);

        const totalBalance =
          balanceData.reduce(
            (sum: number, item: SellerBalanceDB) => sum + (item.balance || 0),
            0
          ) +
          transactionsData.reduce(
            (sum: number, transaction: Transaction) =>
              sum + (transaction.amount || 0),
            0
          );
        setSellerBalance(totalBalance);
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

    fetchTransactionsAndBalance();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredTransactions = transactions.filter((transaction) => {
    if (transactionType !== 'All' && transaction.moneyFlow !== transactionType)
      return false;
    if (
      searchOrderId &&
      !transaction.transactionID
        .toString()
        .includes(searchOrderId.toLowerCase())
    )
      return false;
    return true;
  });

  const totalAmount = filteredTransactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  const handleWithdraw = async () => {
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
      transactionID: transactions.length + 1,
      createdOn: new Date().toISOString().split('T')[0],
      description: 'Withdrawal',
      orderId: `WTH${Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, '0')}`,
      moneyFlow: 'Flow Out',
      amount: -amount,
      status: 'Completed',
    };
    setTransactions([newTransaction, ...transactions]);

    // Create the transaction DTO to send to the API
    const transactionDto = {
      userID: userId,
      createdOn: new Date(),
      description: 'Withdrawal',
      moneyFlow: 'Flow Out',
      amount: -amount,
      paymentMethod: withdrawalMethod,
      status: 'Completed',
      estimatedDate: new Date(),
    };

    try {
      const response = await fetch(
        'http://localhost:5088/api/Transaction',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(transactionDto),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to create transaction');
      }

      const data = await response.json();

      // Update feedback message after successful transaction creation
      setFeedbackMessage(
        `$${amount.toFixed(2)} has been withdrawn from your account.`
      );
    } catch (err) {
      if (err instanceof Error) {
        setFeedbackMessage(`Error: ${err.message}`);
      } else {
        setFeedbackMessage('An unexpected error occurred');
      }
    }

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
                <DialogContent className='bg-white'>
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
                        disabled={!withdrawalAmount || !withdrawalMethod}
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
              {bankAccount.map((bA) => (
                <div>
                  <p>{bA.bankName}</p>
                  <p>**** **** **** {bA.accountNumber.toString().slice(-4)}</p>
                </div>
              ))}
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
              <TabsTrigger value="Flow In">Flow In</TabsTrigger>
              <TabsTrigger value="Flow Out">Flow Out</TabsTrigger>
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
                  placeholder="Search Transaction ID"
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
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Money Flow</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.transactionID}>
                      <TableCell>{transaction.createdOn}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>{transaction.transactionID}</TableCell>
                      <TableCell>{transaction.moneyFlow}</TableCell>
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
