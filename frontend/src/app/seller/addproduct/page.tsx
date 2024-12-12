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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [displayedCategory, setDisplayedCategory] =
    useState<string>('Select a category');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleConfirm = () => {
    if (selectedCategory && selectedSubcategory) {
      setDisplayedCategory(`${selectedCategory} > ${selectedSubcategory}`);
      setCategory(`${selectedCategory} > ${selectedSubcategory}`);
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

  const [productName, setProductName] = useState('');
  const [condition, setCondition] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const shopId = 2; // Static ShopID
  const sellStatus = 'Reviewing'; // Default status

  const uploadPhoto = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await fetch('http://localhost:5088/api/Upload', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const { url } = await response.json(); // Assuming the response returns the file URL
        return url;
      } else {
        const errorData = await response.text(); // Get the server's error message
        console.error('Upload error:', errorData);
        throw new Error('Failed to upload photo');
      }
    } catch (error) {
      alert('Photo upload failed');
      console.error(error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !productName ||
      !condition ||
      !price ||
      !stock ||
      !photo ||
      !category ||
      !description
    ) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Upload the photo and get the URL
      const photoUrl = await uploadPhoto(photo);
  
      if (!photoUrl) {
        alert('Failed to upload photo');
        return;
      }
  
      // Create the product object
      const productData = {
        ShopID: shopId,
        ProductName: productName,
        Condition: condition,
        Photo: photoUrl, // Save the photo URL
        Price: price,
        Stock: stock,
        Category: category,
        Description: description,
        SellStatus: sellStatus,
      };
  
      // Send the product data to the backend
      const response = await fetch(
        'http://localhost:5088/api/Products/CreateProduct',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData),
        }
      );
  
      if (response.ok) {
        alert('Product created successfully!');
        router.push('/seller/myproduct'); // Redirect to the products page
      } else {
        const errorData = await response.json();
        alert(`Failed to create product: ${errorData.message}`);
      }
    } catch (error) {
      alert('An error occurred while creating the product');
      console.error(error);
    }
  };

  return (
    <div className="space-y-6 min-h-screen p-6">
      <form className="space-y-8">
        <div className="space-y-6 p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold">Basic Information</h2>

          <div className="space-y-2">
            <Label htmlFor="product-images">Product Images</Label>
            <Input
              id="product-images"
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files?.[0] || null)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="product-name">Product Name</Label>
            <Input
              id="product-name"
              placeholder="Enter product name"
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="product-category">Product Category</Label>
            <div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline">{displayedCategory}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white">
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
                        onValueChange={(category) => {
                          setSelectedCategory(category); // Save category
                          setCategory(category);
                          setDisplayedCategory(category); // Optionally update displayed text
                        }}
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
                                  onValueChange={(subcategory) => {
                                    setSelectedSubcategory(subcategory); // Save subcategory
                                    setCategory(`${category} > ${subcategory}`);
                                    setDisplayedCategory(
                                      `${category} > ${subcategory}`
                                    ); // Update displayed text
                                  }}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="product-condition">Product Condition</Label>
            <Select onValueChange={(value) => setCondition(value)}>
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
            <Input
              id="product-price"
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="product-stock">Stock</Label>
            <Input
              id="product-stock"
              type="number"
              placeholder="Enter stock quantity"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
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
            onClick={handleSubmit}
          >
            Save and Publish
          </Button>
        </div>
      </form>
    </div>
  );
}
