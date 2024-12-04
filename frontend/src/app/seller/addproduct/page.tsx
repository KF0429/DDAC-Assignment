'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Trash2 } from 'lucide-react';

export default function AddProduct() {
  const router = useRouter();
  const [showWholesale, setShowWholesale] = useState(false);
  const [priceTiers, setPriceTiers] = useState<
    { min: string; max: string; price: string }[]
  >([]);

  const addPriceTier = () => {
    setPriceTiers([...priceTiers, { min: '', max: '', price: '' }]);
    setShowWholesale(true);
  };

  const updatePriceTier = (
    index: number,
    field: 'min' | 'max' | 'price',
    value: string
  ) => {
    const newTiers = [...priceTiers];
    newTiers[index][field] = value;
    setPriceTiers(newTiers);
  };

  const removePriceTier = (index: number) => {
    const newTiers = priceTiers.filter((_, i) => i !== index);
    setPriceTiers(newTiers);
    if (newTiers.length === 0) setShowWholesale(false);
  };

  return (
    <div className="space-y-6 min-h-screen p-6">
      <h1 className="text-3xl font-bold">Add New Product</h1>

      <form className="space-y-8">
        <div className="space-y-6 p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold">Basic Information</h2>

          <div className="space-y-2">
            <Label htmlFor="product-images">Product Images</Label>
            <Input id="product-images" type="file" multiple accept="image/*" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="product-name">Product Name</Label>
            <Input id="product-name" placeholder="Enter product name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="product-category">Product Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="category1">Category 1</SelectItem>
                <SelectItem value="category2">Category 2</SelectItem>
                <SelectItem value="category3">Category 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="product-description">Product Description</Label>
            <Textarea
              id="product-description"
              placeholder="Enter product description"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="product-condition">Product Condition</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="used">Used</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-6 p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold">Sales Information</h2>

          <div className="space-y-2">
            <Label htmlFor="product-price">Price</Label>
            <Input id="product-price" type="number" placeholder="Enter price" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="product-stock">Stock</Label>
            <Input
              id="product-stock"
              type="number"
              placeholder="Enter stock quantity"
            />
          </div>

          {!showWholesale && (
            <Button
              type="button"
              onClick={addPriceTier}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              + Add Price Tier
            </Button>
          )}

          {showWholesale && (
            <div className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>No.</TableHead>
                    <TableHead>
                      Min Quantity
                    </TableHead>
                    <TableHead>
                      Max Quantity
                    </TableHead>
                    <TableHead>
                      Unit Price
                    </TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {priceTiers.map((tier, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        Price Tier {index + 1}
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          value={tier.min}
                          onChange={(e) =>
                            updatePriceTier(index, 'min', e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          value={tier.max}
                          onChange={(e) =>
                            updatePriceTier(index, 'max', e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          value={tier.price}
                          onChange={(e) =>
                            updatePriceTier(index, 'price', e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => removePriceTier(index)}
                          className="text-orange-500 hover:text-orange-700"
                        >
                          <Trash2 size={20} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button
                type="button"
                onClick={addPriceTier}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                + Add Another Price Tier
              </Button>
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            className="border-orange-500 text-orange-500 hover:bg-orange-50"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Save and Publish
          </Button>
        </div>
      </form>
    </div>
  );
}
