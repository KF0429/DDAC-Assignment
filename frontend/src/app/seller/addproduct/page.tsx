'use client';

import { useState, useMemo } from 'react';
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';

const categories = {
  Health: [
    'Food Supplement',
    'Medical Supplies',
    'Personal Care',
    'Sexual Wellness',
    'Others',
  ],
  'Fashion Accessories': [
    'Hair Accessories',
    'Eyewear',
    'Investment Precious Metals',
    'Additional Accessories',
  ],
  'Home Appliances': [
    'Projectors & Accessories',
    'Small Household Appliances',
    'Large Household Appliances',
    'TVs & Accessories',
    'Kitchen Appliances',
    'Electrical Circuitry & Parts',
  ],
  'Men Clothes': [
    'Hoodies & Sweatshirts',
    'Jackets, Coats & Vests',
    'Suits',
    'Pants',
    'Tops',
    'Innerwear & Underwear',
    'Traditional Wear',
  ],
  'Men Shoes': ['Boots', 'Sandals & Flip Flops', 'Shoe Care & Accessories'],
  'Mobile & Gadgets': ['Wearable Devices', 'Accessories'],
  'Muslim Fashion': ['Women Muslim Wear', 'Kid Muslim Wear'],
  'Travel & Luggage': ['Travel Bags', 'Travel Accessories'],
  'Women Bags': ['Laptop Bags', 'Wallets', 'Bag Accessories'],
  'Women Clothes': [
    'Tops',
    'Pants & Leggings',
    'Shorts',
    'Jumpsuits, Playsuits & Overalls',
    'Jackets, Coats & Vests',
    'Hoodies & Sweatshirts',
    'Sets',
    'Lingerie & Underwear',
    'Sleepwear & Pajamas',
    'Maternity Wear',
    'Traditional Wear',
    'Fabric',
    'Socks & Stockings',
  ],
};

export default function AddProduct() {
  const router = useRouter();
  const [showWholesale, setShowWholesale] = useState(false);
  const [priceTiers, setPriceTiers] = useState<
    { min: string; max: string; price: string }[]
  >([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [displayedCategory, setDisplayedCategory] =
    useState<string>('Select a category');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const handleConfirm = () => {
    if (selectedCategory && selectedSubcategory) {
      setDisplayedCategory(`${selectedCategory} > ${selectedSubcategory}`);
      setIsDialogOpen(false);
    }
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return categories;

    const lowercasedQuery = searchQuery.toLowerCase();
    return Object.fromEntries(
      Object.entries(categories).filter(
        ([category, subcategories]) =>
          category.toLowerCase().includes(lowercasedQuery) ||
          subcategories.some((subcategory) =>
            subcategory.toLowerCase().includes(lowercasedQuery)
          )
      )
    );
  }, [searchQuery]);

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
            <div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline">{displayedCategory}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit Category</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Input
                      placeholder="Search categories..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <ScrollArea className="h-[300px] pr-4">
                      <RadioGroup
                        value={selectedCategory || ''}
                        onValueChange={handleCategoryChange}
                      >
                        {Object.entries(filteredCategories).map(
                          ([category, subcategories]) => (
                            <div key={category} className="mb-4">
                              <RadioGroupItem
                                value={category}
                                id={category}
                                className="peer sr-only"
                              />
                              <Label
                                htmlFor={category}
                                className="flex flex-col items-start justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                              >
                                {category}
                              </Label>
                              {selectedCategory === category && (
                                <RadioGroup
                                  value={selectedSubcategory || ''}
                                  onValueChange={handleSubcategoryChange}
                                  className="ml-4 mt-2"
                                >
                                  {subcategories.map((subcategory) => (
                                    <div
                                      key={subcategory}
                                      className="flex items-center space-x-2"
                                    >
                                      <RadioGroupItem
                                        value={subcategory}
                                        id={subcategory}
                                      />
                                      <Label htmlFor={subcategory}>
                                        {subcategory}
                                      </Label>
                                    </div>
                                  ))}
                                </RadioGroup>
                              )}
                            </div>
                          )
                        )}
                      </RadioGroup>
                    </ScrollArea>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={handleConfirm}
                      disabled={!selectedCategory || !selectedSubcategory}
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      Confirm
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
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
                    <TableHead>Min Quantity</TableHead>
                    <TableHead>Max Quantity</TableHead>
                    <TableHead>Unit Price</TableHead>
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
