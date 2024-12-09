'use client';

import { useState } from 'react';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Pencil, Plus } from 'lucide-react';

// Mock data
const initialCategories = [
  { id: 1, name: 'Electronics', products: 15, display: true },
  { id: 2, name: 'Clothing', products: 25, display: false },
  { id: 3, name: 'Books', products: 10, display: true },
];

const initialProducts = [
  { id: 1, name: 'Smartphone', price: 599.99, stock: 50, categoryId: 1 },
  { id: 2, name: 'Laptop', price: 999.99, stock: 30, categoryId: 1 },
  { id: 3, name: 'T-shirt', price: 19.99, stock: 100, categoryId: 2 },
  { id: 4, name: 'Jeans', price: 49.99, stock: 75, categoryId: 2 },
  { id: 5, name: 'Novel', price: 14.99, stock: 200, categoryId: 3 },
];

export default function MyShopCategoryPage() {
  const [categories, setCategories] = useState(initialCategories);
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: '',
    display: true,
    products: [],
  });
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    stock: '',
  });
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  const handleAddCategory = () => {
    setIsAddingCategory(true);
    setNewCategory({ name: '', display: true, products: [] });
  };

  const handleSaveNewCategory = () => {
    if (newCategory.name.trim()) {
      const categoryToAdd = {
        id: categories.length + 1,
        name: newCategory.name,
        products: newCategory.products.length,
        display: newCategory.display,
      };
      setCategories([...categories, categoryToAdd]);
      setProducts([
        ...products,
        ...newCategory.products.map((product, index) => ({
          id: products.length + index + 1,
          name: product.name,
          price: parseFloat(product.price),
          stock: parseInt(product.stock),
          categoryId: categoryToAdd.id,
        })),
      ]);
      setIsAddingCategory(false);
      setNewCategory({ name: '', display: true, products: [] });
    }
  };

  const handleToggleDisplay = (id) => {
    setCategories(
      categories.map((category) =>
        category.id === id
          ? { ...category, display: !category.display }
          : category
      )
    );
  };

  const handleViewDetails = (category) => {
    setSelectedCategory(category);
    setNewCategoryName(category.name);
  };

  const handleEditName = () => {
    setIsEditingName(true);
  };

  const handleSaveName = () => {
    setCategories(
      categories.map((category) =>
        category.id === selectedCategory.id
          ? { ...category, name: newCategoryName }
          : category
      )
    );
    setSelectedCategory({ ...selectedCategory, name: newCategoryName });
    setIsEditingName(false);
  };

  const handleToggleActivate = () => {
    const updatedCategory = {
      ...selectedCategory,
      display: !selectedCategory.display,
    };
    setCategories(
      categories.map((category) =>
        category.id === selectedCategory.id ? updatedCategory : category
      )
    );
    setSelectedCategory(updatedCategory);
  };

  const handleAddProduct = () => {
    setIsAddingProduct(true);
    setNewProduct({ name: '', price: '', stock: '' });
  };

  const handleSaveNewProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.stock) {
      const productToAdd = {
        id: products.length + 1,
        name: newProduct.name,
        price: parseFloat(newProduct.price),
        stock: parseInt(newProduct.stock),
        categoryId: selectedCategory.id,
      };
      setProducts([...products, productToAdd]);
      setCategories(
        categories.map((category) =>
          category.id === selectedCategory.id
            ? { ...category, products: category.products + 1 }
            : category
        )
      );
      setSelectedCategory({
        ...selectedCategory,
        products: selectedCategory.products + 1,
      });
      setIsAddingProduct(false);
    }
  };

  const handleAddProductRow = () => {
    setNewCategory({
      ...newCategory,
      products: [...newCategory.products, { name: '', price: '', stock: '' }],
    });
  };

  const handleProductChange = (index, field, value) => {
    const updatedProducts = newCategory.products.map((product, i) =>
      i === index ? { ...product, [field]: value } : product
    );
    setNewCategory({ ...newCategory, products: updatedProducts });
  };

  const filteredProducts = products.filter(
    (product) =>
      product.categoryId === selectedCategory?.id &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 mb-4">
          <CardTitle className="text-2xl font-bold">Shop Categories</CardTitle>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white"
            onClick={handleAddCategory}
          >
            Add Category
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category Name</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Display</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>{category.products}</TableCell>
                  <TableCell>
                    <Switch
                      checked={category.display}
                      onCheckedChange={() => handleToggleDisplay(category.id)}
                      className={`${
                        category.display ? 'bg-green-500' : ''
                      } border border-primary rounded-full`}
                    />
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="link"
                          onClick={() => handleViewDetails(category)}
                        >
                          View details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle className="flex justify-between items-center">
                            {isEditingName ? (
                              <Input
                                value={newCategoryName}
                                onChange={(e) =>
                                  setNewCategoryName(e.target.value)
                                }
                                onBlur={handleSaveName}
                                autoFocus
                              />
                            ) : (
                              <>
                                {selectedCategory?.name}
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={handleEditName}
                                >
                                  <Pencil className="h-4 w-4" />
                                </Button>
                              </>
                            )}
                            <div className="flex items-center space-x-2">
                              <Label htmlFor="activate">Activate</Label>
                              <Switch
                                id="activate"
                                checked={selectedCategory?.display}
                                onCheckedChange={handleToggleActivate}
                                className={`${
                                  selectedCategory?.display
                                    ? 'bg-green-500'
                                    : ''
                                } border border-primary rounded-full`}
                              />
                            </div>
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-lg font-semibold">
                              Product List
                            </h3>
                            <div className="flex justify-between items-center my-2 space-x-4">
                              <Input
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-2/3"
                              />
                              <Button
                                className="bg-orange-500 hover:bg-orange-600 text-white"
                                onClick={handleAddProduct}
                              >
                                Add Product
                              </Button>
                            </div>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Product Name</TableHead>
                                  <TableHead>Price</TableHead>
                                  <TableHead>Stock</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {filteredProducts.map((product) => (
                                  <TableRow key={product.id}>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>
                                      ${product.price.toFixed(2)}
                                    </TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                  </TableRow>
                                ))}
                                {isAddingProduct && (
                                  <TableRow>
                                    <TableCell>
                                      <Input
                                        value={newProduct.name}
                                        onChange={(e) =>
                                          setNewProduct({
                                            ...newProduct,
                                            name: e.target.value,
                                          })
                                        }
                                        placeholder="Product name"
                                      />
                                    </TableCell>
                                    <TableCell>
                                      <Input
                                        value={newProduct.price}
                                        onChange={(e) =>
                                          setNewProduct({
                                            ...newProduct,
                                            price: e.target.value,
                                          })
                                        }
                                        placeholder="Price"
                                        type="number"
                                      />
                                    </TableCell>
                                    <TableCell>
                                      <Input
                                        value={newProduct.stock}
                                        onChange={(e) =>
                                          setNewProduct({
                                            ...newProduct,
                                            stock: e.target.value,
                                          })
                                        }
                                        placeholder="Stock"
                                        type="number"
                                      />
                                    </TableCell>
                                  </TableRow>
                                )}
                              </TableBody>
                            </Table>
                          </div>
                          <div className="flex justify-end space-x-2">
                            {isAddingProduct && (
                              <Button
                                className="bg-orange-500 hover:bg-orange-600 text-white"
                                onClick={handleSaveNewProduct}
                              >
                                Confirm
                              </Button>
                            )}
                            <Button
                              className="bg-orange-500 hover:bg-orange-600 text-white"
                              onClick={() => {
                                setSelectedCategory(null);
                                setIsAddingProduct(false);
                              }}
                            >
                              Close
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isAddingCategory} onOpenChange={setIsAddingCategory}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Category</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="categoryName" className="text-right">
                Category Name
              </Label>
              <Input
                id="categoryName"
                value={newCategory.name}
                onChange={(e) =>
                  setNewCategory({ ...newCategory, name: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="categoryDisplay" className="text-right">
                Display
              </Label>
              <Switch
                id="categoryDisplay"
                checked={newCategory.display}
                onCheckedChange={(checked) =>
                  setNewCategory({ ...newCategory, display: checked })
                }
                className={`${
                  newCategory.display ? 'bg-green-500' : ''
                } border border-primary rounded-full`}
              />
            </div>
            <div>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={handleAddProductRow}
                type="button"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
              {newCategory.products &&
                newCategory.products.map((product, index) => (
                  <div key={index} className="grid grid-cols-3 gap-2 mt-2">
                    <Input
                      placeholder="Product name"
                      value={product.name}
                      onChange={(e) =>
                        handleProductChange(index, 'name', e.target.value)
                      }
                    />
                    <Input
                      placeholder="Price"
                      type="number"
                      value={product.price}
                      onChange={(e) =>
                        handleProductChange(index, 'price', e.target.value)
                      }
                    />
                    <Input
                      placeholder="Stock"
                      type="number"
                      value={product.stock}
                      onChange={(e) =>
                        handleProductChange(index, 'stock', e.target.value)
                      }
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={handleSaveNewCategory}
            >
              Confirm
            </Button>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white"
              variant="outline"
              onClick={() => setIsAddingCategory(false)}
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
