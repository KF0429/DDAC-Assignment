'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface BankAccount {
  bankAccountID: number;
  userID: number;
  bankName: string;
  fullNameInBank: string;
  accountNumber: number;
  default: boolean;
}

export default function BankAccountsPage() {
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);
  const [newAccount, setNewAccount] = useState({
    fullName: '',
    bankName: '',
    accountNo: '',
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState<string | null>(null);
  const userId = 1;

  useEffect(() => {
    const fetchBankAccount = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5088/api/BankAccount/${userId}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setBankAccounts(data);
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

    fetchBankAccount();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleDefaultChange = async (id: number) => {
    const accountToUpdate = bankAccounts.find(
      (account) => account.bankAccountID === id
    );
    if (!accountToUpdate) return;

    // Toggle the default status of the selected account
    const updatedAccount = {
      ...accountToUpdate,
      default: !accountToUpdate.default,
    };

    // Prepare the list of bank accounts with the correct default status
    const updatedBankAccounts = bankAccounts.map((account) => {
      if (account.bankAccountID === id) {
        return updatedAccount;
      }
      return { ...account, default: false }; // Set all other accounts to default: false
    });

    try {
      // Send the update request to the API
      const response = await fetch(
        `http://localhost:5088/api/BankAccount/Update/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            UserID: updatedAccount.userID,
            BankName: updatedAccount.bankName,
            FullNameInBank: updatedAccount.fullNameInBank,
            AccountNumber: updatedAccount.accountNumber,
            Default: updatedAccount.default,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update default status');
      }

      const updatedBankAccount = await response.json();

      // After successfully updating the backend, update the state with the new default status
      setBankAccounts(updatedBankAccounts);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAccount((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5088/api/BankAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID: userId,
          fullNameInBank: newAccount.fullName,
          bankName: newAccount.bankName,
          accountNumber: parseInt(newAccount.accountNo),
          default: false,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create a new bank account');
      }

      const createdAccount = await response.json();
      setBankAccounts([...bankAccounts, createdAccount]);
      setNewAccount({ fullName: '', bankName: '', accountNo: '' });
      setIsDialogOpen(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:5088/api/BankAccount/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete the bank account');
      }

      // Update the state after successful deletion
      setBankAccounts(
        bankAccounts.filter((account) => account.bankAccountID !== id)
      );
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Bank Accounts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Full Name in Bank Account</TableHead>
                <TableHead>Bank Name</TableHead>
                <TableHead>Account No</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bankAccounts.map((account) => (
                <TableRow key={account.bankAccountID}>
                  <TableCell>{account.fullNameInBank}</TableCell>
                  <TableCell>{account.bankName}</TableCell>
                  <TableCell>{account.accountNumber}</TableCell>
                  <TableCell>
                    <Checkbox
                      id={`default-${account.bankAccountID}`}
                      checked={account.default}
                      onCheckedChange={() =>
                        handleDefaultChange(account.bankAccountID)
                      }
                    />
                  </TableCell>
                  <TableCell className="pl-0">
                    <Button
                      variant="link"
                      onClick={() => handleDelete(account.bankAccountID)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-end mt-4">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  + Add Bank Account
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white">
                <DialogHeader>
                  <DialogTitle>Bank Account</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name in Bank Account</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={newAccount.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bankName">Bank Name</Label>
                    <Input
                      id="bankName"
                      name="bankName"
                      value={newAccount.bankName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountNo">Account No</Label>
                    <Input
                      id="accountNo"
                      name="accountNo"
                      value={newAccount.accountNo}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    type="submit"
                  >
                    Save
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
