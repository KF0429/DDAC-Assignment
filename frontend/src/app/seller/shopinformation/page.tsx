'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';

// Mock data
const initialShopInfo = {
  basic: {
    name: 'My Awesome Shop',
    logo: '/placeholder.svg',
    description: 'We sell the best products at the best prices!',
  },
  contact: {
    email: 'myshop@example.com',
    contactNumber: '+1 234 567 8900',
    lastUpdated: '2023-07-01',
  },
  business: {
    sellerType: 'Registered business sellers',
    companyName: 'Awesome Shop Inc.',
    businessRegistrationNumber: 'BRN123456789',
  },
};

export default function ShopInformationPage() {
  const [shopInfo, setShopInfo] = useState(initialShopInfo);
  const [editingSection, setEditingSection] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleEdit = (section) => {
    setEditingSection(section);
    setIsDialogOpen(true);
  };

  const handleSave = (section, newData) => {
    setShopInfo((prevInfo) => ({
      ...prevInfo,
      [section]: {
        ...prevInfo[section],
        ...newData,
        ...(section === 'contact'
          ? { lastUpdated: new Date().toISOString().split('T')[0] }
          : {}),
      },
    }));
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Shop Information</h1>
        <p className="text-muted-foreground">
          View your shop status and update your shop profile
        </p>
      </div>

      <Tabs defaultValue="basic">
        <TabsList>
          <TabsTrigger value="basic">Basic Information</TabsTrigger>
          <TabsTrigger value="contact">Shopee Contact Information</TabsTrigger>
          <TabsTrigger value="business">Business Information</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">
                Basic Information
              </CardTitle>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => handleEdit('basic')}
                  >
                    Edit
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Basic Information</DialogTitle>
                  </DialogHeader>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      handleSave('basic', Object.fromEntries(formData));
                    }}
                  >
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Shop Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          defaultValue={shopInfo.basic.name}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="logo" className="text-right">
                          Shop Logo
                        </Label>
                        <Input
                          id="logo"
                          name="logo"
                          defaultValue={shopInfo.basic.logo}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                          Description
                        </Label>
                        <Textarea
                          id="description"
                          name="description"
                          defaultValue={shopInfo.basic.description}
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                        type="submit"
                      >
                        Save changes
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <h3 className="font-semibold w-40">Shop Name:</h3>
                    <p>{shopInfo.basic.name}</p>
                  </div>
                  <div className="flex items-center">
                    <h3 className="font-semibold w-40">Shop Logo:</h3>
                    <Image
                      src={shopInfo.basic.logo}
                      alt="Shop Logo"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex items-start">
                    <h3 className="font-semibold w-40">Shop Description:</h3>
                    <p className="flex-1">{shopInfo.basic.description}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">
                Shopee Contact Information
              </CardTitle>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => handleEdit('contact')}
                  >
                    Edit
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Contact Information</DialogTitle>
                  </DialogHeader>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      handleSave('contact', Object.fromEntries(formData));
                    }}
                  >
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          defaultValue={shopInfo.contact.email}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="contactNumber" className="text-right">
                          Contact Number
                        </Label>
                        <Input
                          id="contactNumber"
                          name="contactNumber"
                          defaultValue={shopInfo.contact.contactNumber}
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                        type="submit"
                      >
                        Save changes
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <h3 className="font-semibold w-40">Email:</h3>
                    <p>{shopInfo.contact.email}</p>
                  </div>
                  <div className="flex items-center">
                    <h3 className="font-semibold w-40">Contact Number:</h3>
                    <p>{shopInfo.contact.contactNumber}</p>
                  </div>
                  <div className="flex items-center">
                    <h3 className="font-semibold w-40">Last Updated:</h3>
                    <p>{shopInfo.contact.lastUpdated}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="business">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">
                Business Information
              </CardTitle>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => handleEdit('business')}
                  >
                    Edit
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Business Information</DialogTitle>
                  </DialogHeader>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      handleSave('business', Object.fromEntries(formData));
                    }}
                  >
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="sellerType" className="text-right">
                          Seller Type
                        </Label>
                        <Select
                          name="sellerType"
                          defaultValue={shopInfo.business.sellerType}
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select seller type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Individual sellers">
                              Individual sellers
                            </SelectItem>
                            <SelectItem value="Registered business sellers">
                              Registered business sellers
                            </SelectItem>
                            <SelectItem value="Marketplace sellers">
                              Marketplace sellers
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="companyName" className="text-right">
                          Company Name
                        </Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          defaultValue={shopInfo.business.companyName}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label
                          htmlFor="businessRegistrationNumber"
                          className="text-right"
                        >
                          Business Registration Number
                        </Label>
                        <Input
                          id="businessRegistrationNumber"
                          name="businessRegistrationNumber"
                          defaultValue={
                            shopInfo.business.businessRegistrationNumber
                          }
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                        type="submit"
                      >
                        Save changes
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <h3 className="font-semibold w-40">Seller Type:</h3>
                    <p>{shopInfo.business.sellerType}</p>
                  </div>
                  <div className="flex items-center">
                    <h3 className="font-semibold w-40">Company Name:</h3>
                    <p>{shopInfo.business.companyName}</p>
                  </div>
                  <div className="flex items-center">
                    <h3 className="font-semibold w-40">
                      Business Registration Number:
                    </h3>
                    <p>{shopInfo.business.businessRegistrationNumber}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
