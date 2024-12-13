'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

interface ShopInfo {
  shopID: number;
  userID: number;
  shopName: string;
  shopImage: string;
  shopDescription: string;
  shopEmail: string;
  shopContactNumber: string;
  sellerType: string;
  companyName: string;
  businessRegistrationNumber: number;
}

export default function ShopInformationPage() {
  const [shopInfo, setShopInfo] = useState<ShopInfo[]>([]);
  const [editingSection, setEditingSection] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState<string | null>(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5088/api/Sellers/ShopInfo/${userId}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setShopInfo(data);
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

  const handleEdit = (section) => {
    setEditingSection(section);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Shop Information</h1>
        <p className="text-muted-foreground">
          View your shop information and bussiness profile
        </p>
      </div>
      {shopInfo.map((shopInfo) => (
        <Tabs defaultValue="basic">
          <TabsList>
            <TabsTrigger value="basic">Basic Information</TabsTrigger>
            <TabsTrigger value="contact">
              Shopee Contact Information
            </TabsTrigger>
            <TabsTrigger value="business">Business Information</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-2xl font-bold">
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <h3 className="font-semibold w-40">Shop Name:</h3>
                      <p>{shopInfo.shopName}</p>
                    </div>
                    <div className="flex items-center">
                      <h3 className="font-semibold w-40">Shop Logo:</h3>
                      <Image
                        src={shopInfo.shopImage}
                        alt="Shop Logo"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex items-start">
                      <h3 className="font-semibold w-40">Shop Description:</h3>
                      <p className="flex-1">{shopInfo.shopDescription}</p>
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
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <h3 className="font-semibold w-40">Email:</h3>
                      <p>{shopInfo.shopEmail}</p>
                    </div>
                    <div className="flex items-center">
                      <h3 className="font-semibold w-40">Contact Number:</h3>
                      <p>{shopInfo.shopContactNumber}</p>
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
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <h3 className="font-semibold w-40">Seller Type:</h3>
                      <p>{shopInfo.sellerType}</p>
                    </div>
                    <div className="flex items-center">
                      <h3 className="font-semibold w-40">Company Name:</h3>
                      <p>{shopInfo.companyName}</p>
                    </div>
                    <div className="flex items-center">
                      <h3 className="font-semibold w-40">
                        Business Registration Number:
                      </h3>
                      <p>{shopInfo.businessRegistrationNumber}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      ))}
    </div>
  );
}
