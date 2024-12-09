'use client';

import { useState } from 'react';
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

// Mock data for existing bank accounts
const initialBankAccounts = [
  {
    id: 1,
    fullName: 'John Doe',
    bankName: 'Bank A',
    accountNo: '1234567890',
    isDefault: true,
  },
  {
    id: 2,
    fullName: 'John Doe',
    bankName: 'Bank B',
    accountNo: '0987654321',
    isDefault: false,
  },
];

export default function BankAccountsPage() {
  const [bankAccounts, setBankAccounts] = useState(initialBankAccounts);
  const [newAccount, setNewAccount] = useState({
    fullName: '',
    bankName: '',
    accountNo: '',
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDefaultChange = (id: number) => {
    setBankAccounts(
      bankAccounts.map((account) => ({
        ...account,
        isDefault: account.id === id,
      }))
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAccount((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = Math.max(...bankAccounts.map((account) => account.id)) + 1;
    setBankAccounts([
      ...bankAccounts,
      { ...newAccount, id: newId, isDefault: false },
    ]);
    setNewAccount({ fullName: '', bankName: '', accountNo: '' });
    setIsDialogOpen(false);
  };

  const handleDelete = (id: number) => {
    setBankAccounts(bankAccounts.filter((account) => account.id !== id));
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
                <TableRow key={account.id}>
                  <TableCell>{account.fullName}</TableCell>
                  <TableCell>{account.bankName}</TableCell>
                  <TableCell>{account.accountNo}</TableCell>
                  <TableCell>
                    <Checkbox
                      id={`default-${account.id}`}
                      checked={account.isDefault}
                      onCheckedChange={() => handleDefaultChange(account.id)}
                    />
                  </TableCell>
                  <TableCell className="pl-0">
                    <Button
                      variant="link"
                      onClick={() => handleDelete(account.id)}
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
              <DialogContent>
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
