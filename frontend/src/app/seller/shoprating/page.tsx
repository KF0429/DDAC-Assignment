'use client';

import { useEffect, useState } from 'react';
import { Star, MessageSquare } from 'lucide-react';
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

interface Reviews {
  commentID: number;
  userID: number;
  orderItemID: number;
  productID: number;
  userName: string;
  productName: string;
  rating: number;
  commentDescription: string;
}

export default function ShopRatingPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeStarFilter, setActiveStarFilter] = useState('all');
  const [reviews, setReviews] = useState<Reviews[]>([]);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState<string | null>(null);
  const userId = 1;

  useEffect(() => {
      const fetchIncomes = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            `http://localhost:5088/api/Comments/ShopRating/${userId}`
          );
          if (!response.ok) {
            throw new Error('Failed to fetch orders');
          }
          const data = await response.json();
          setReviews(data);
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
    
  function calculateAverageRating(reviews: Reviews[]): number {
    if (reviews.length === 0) return 0; // Handle empty array case

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
  }
  const averageRating = calculateAverageRating(reviews);

  const filteredReviews = activeStarFilter === 'all' 
    ? reviews 
    : reviews.filter((review) => review.rating === parseInt(activeStarFilter));

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 mb-4">
          <CardTitle className="text-2xl font-bold">
            <Star className="inline-block mr-2" /> Shop Rating
          </CardTitle>
          <div className="text-2xl font-bold">
            <span className="text-5xl text-orange-500">
              {averageRating.toFixed(1)}
            </span>{' '}
            / 5
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeStarFilter}
            onValueChange={setActiveStarFilter}
            className="mt-4"
          >
            <TabsList>
              <TabsTrigger value="all" className={`${
                  activeStarFilter === 'all'
                    ? 'bg-orange-200 text-orange-700'
                    : 'bg-white text-gray-700'
                } py-2 px-4 rounded transition-colors duration-200`}>All</TabsTrigger>
              <TabsTrigger value="5" className={`${
                  activeStarFilter === '5'
                    ? 'bg-orange-200 text-orange-700'
                    : 'bg-white text-gray-700'
                } py-2 px-4 rounded transition-colors duration-200`}>5 Star</TabsTrigger>
              <TabsTrigger value="4" className={`${
                  activeStarFilter === '4'
                    ? 'bg-orange-200 text-orange-700'
                    : 'bg-white text-gray-700'
                } py-2 px-4 rounded transition-colors duration-200`}>4 Star</TabsTrigger>
              <TabsTrigger value="3" className={`${
                  activeStarFilter === '3'
                    ? 'bg-orange-200 text-orange-700'
                    : 'bg-white text-gray-700'
                } py-2 px-4 rounded transition-colors duration-200`}>3 Star</TabsTrigger>
              <TabsTrigger value="2" className={`${
                  activeStarFilter === '2'
                    ? 'bg-orange-200 text-orange-700'
                    : 'bg-white text-gray-700'
                } py-2 px-4 rounded transition-colors duration-200`}>2 Star</TabsTrigger>
              <TabsTrigger value="1" className={`${
                  activeStarFilter === '1'
                    ? 'bg-orange-200 text-orange-700'
                    : 'bg-white text-gray-700'
                } py-2 px-4 rounded transition-colors duration-200`}>1 Star</TabsTrigger>
            </TabsList>
          </Tabs>
          <p className="pl-4 mt-8 mb-2">
            Showing {filteredReviews.length} reviews
          </p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Username</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Product Information</TableHead>
                <TableHead>Buyer's Review</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReviews.map((review) => (
                <TableRow key={review.commentID}>
                  <TableCell>{review.userName}</TableCell>
                  <TableCell>{review.orderItemID}</TableCell>
                  <TableCell>{review.productName}</TableCell>
                  <TableCell>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`inline-block w-4 h-4 ${
                          i < review.rating
                            ? 'text-orange-400 fill-orange-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <p className="mt-1">{review.commentDescription}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
