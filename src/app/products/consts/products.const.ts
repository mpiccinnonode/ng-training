import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple Watch',
    description: 'A sleek and modern smartwatch',
    price: {
      amount: 299.99,
      currency: 'USD',
    },
    category: {
      name: 'Electronics',
      subcategory: 'Wearable Devices',
    },
  },
  {
    id: 2,
    name: 'Nike Running Shoes',
    description: 'High-quality running shoes for athletes',
    price: {
      amount: 129.99,
      currency: 'USD',
    },
    category: {
      name: 'Sports',
      subcategory: 'Footwear',
    },
  },
  {
    id: 3,
    name: 'Sony TV',
    description: 'A 4K UHD TV with advanced features',
    price: {
      amount: 999.99,
      currency: 'USD',
    },
    category: {
      name: 'Electronics',
      subcategory: 'TVs',
    },
  },
  {
    id: 4,
    name: "Levi's Jeans",
    description: 'Classic and stylish jeans for men and women',
    price: {
      amount: 79.99,
      currency: 'USD',
    },
    category: {
      name: 'Clothing',
      subcategory: 'Denim',
    },
  },
  {
    id: 5,
    name: 'Canon Camera',
    description: 'A high-end DSLR camera for professionals',
    price: {
      amount: 1499.99,
      currency: 'USD',
    },
    category: {
      name: 'Electronics',
      subcategory: 'Cameras',
    },
  },
  {
    id: 6,
    name: 'Samsung Smartphone',
    description: 'A high-end Android smartphone',
    price: {
      amount: 799.99,
      currency: 'EUR',
    },
    category: {
      name: 'Electronics',
      subcategory: 'Smartphones',
    },
  },
  {
    id: 7,
    name: 'Adidas Soccer Ball',
    description: 'A high-quality soccer ball for professionals',
    price: {
      amount: 49.99,
      currency: 'GBP',
    },
    category: {
      name: 'Sports',
      subcategory: 'Soccer',
    },
  },
  {
    id: 8,
    name: 'Sony Headphones',
    description: 'High-quality wireless headphones',
    price: {
      amount: 199.99,
      currency: 'CAD',
    },
    category: {
      name: 'Electronics',
      subcategory: 'Audio',
    },
  },
  {
    id: 9,
    name: 'Reebok CrossFit Shoes',
    description: 'High-quality CrossFit shoes for athletes',
    price: {
      amount: 99.99,
      currency: 'AUD',
    },
    category: {
      name: 'Sports',
      subcategory: 'CrossFit',
    },
  },
  {
    id: 10,
    name: 'LG Refrigerator',
    description: 'A high-end refrigerator with advanced features',
    price: {
      amount: 2499.99,
      currency: 'JPY',
    },
    category: {
      name: 'Home Appliances',
      subcategory: 'Refrigerators',
    },
  },
  {
    id: 11,
    name: 'Asus Laptop',
    description: 'A high-performance laptop for gaming and productivity',
    price: {
      amount: 1299.99,
      currency: 'USD',
    },
    category: {
      name: 'Electronics',
      subcategory: 'Laptops',
    },
  },
  {
    id: 12,
    name: 'Nike Basketball Shoes',
    description: 'High-quality basketball shoes for athletes',
    price: {
      amount: 149.99,
      currency: 'USD',
    },
    category: {
      name: 'Sports',
      subcategory: 'Basketball',
    },
  },
  {
    id: 13,
    name: 'Sony Soundbar',
    description: 'A high-quality soundbar for home theaters',
    price: {
      amount: 299.99,
      currency: 'USD',
    },
    category: {
      name: 'Electronics',
      subcategory: 'Home Audio',
    },
  },
];
