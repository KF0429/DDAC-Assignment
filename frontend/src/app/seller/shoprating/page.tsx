'use client';

import { useState } from 'react';
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

type Review = {
  id: number;
  username: string;
  orderId: string;
  productInfo: string;
  rating: number;
  review: string;
  reply: string | null;
};

// Mock data
const initialReviews = [
  {
    id: 1,
    username: 'John Doe',
    orderId: 'ORD001',
    productInfo: 'Product A',
    rating: 5,
    review: 'Great product!',
    reply: null,
  },
  {
    id: 2,
    username: 'Jane Smith',
    orderId: 'ORD002',
    productInfo: 'Product B',
    rating: 4,
    review: 'Good quality.',
    reply: 'Thank you for your feedback!',
  },
  {
    id: 3,
    username: 'Bob Johnson',
    orderId: 'ORD003',
    productInfo: 'Product C',
    rating: 3,
    review: 'Average product.',
    reply: null,
  },
  {
    id: 4,
    username: 'Alice Brown',
    orderId: 'ORD004',
    productInfo: 'Product D',
    rating: 5,
    review: 'Excellent service!',
    reply: "We're glad you enjoyed it!",
  },
  {
    id: 5,
    username: 'Charlie Wilson',
    orderId: 'ORD005',
    productInfo: 'Product E',
    rating: 3,
    review: 'Not satisfied.',
    reply: null,
  },
];

export default function ShopRatingPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeStarFilter, setActiveStarFilter] = useState('all');
  const [replyingTo, setReplyingTo] = useState<string | number | null>(null);
  const [replyText, setReplyText] = useState('');
  const [reviews, setReviews] = useState(initialReviews);

  const filteredReviews = reviews.filter((review) => {
    if (activeTab === 'toReply' && review.reply) return false;
    if (activeTab === 'replied' && !review.reply) return false;
    if (
      activeStarFilter !== 'all' &&
      review.rating !== parseInt(activeStarFilter)
    )
      return false;
    return true;
  });

  const handleReply = (reviewId: string | number) => {
    setReplyingTo(reviewId);
    setReplyText('');
  };

  const submitReply = () => {
    // In a real application, you would send this to your backend
    setReviews(
      reviews.map((review) =>
        review.id === replyingTo ? { ...review, reply: replyText } : review
      )
    );
    setReplyingTo(null);
    setReplyText('');
  };

  function calculateAverageRating(reviews: Review[]): number {
    if (reviews.length === 0) return 0; // Handle empty array case

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
  }
  const averageRating = calculateAverageRating(initialReviews);

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
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="5">5 Star</TabsTrigger>
              <TabsTrigger value="4">4 Star</TabsTrigger>
              <TabsTrigger value="3">3 Star</TabsTrigger>
              <TabsTrigger value="2">2 Star</TabsTrigger>
              <TabsTrigger value="1">1 Star</TabsTrigger>
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
                <TableRow key={review.id}>
                  <TableCell>{review.username}</TableCell>
                  <TableCell>{review.orderId}</TableCell>
                  <TableCell>{review.productInfo}</TableCell>
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
                    <p className="mt-1">{review.review}</p>
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
