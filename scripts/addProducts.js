// scripts/addProducts.js
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const addProducts = async () => {
  const products = [
    {
      name: 'Product 1',
      price: 29.99,
      description: 'Description for Product 1',
      imageURL: 'http://example.com/product1.jpg',
    },
    {
      name: 'Product 2',
      price: 49.99,
      description: 'Description for Product 2',
      imageURL: 'http://example.com/product2.jpg',
    },
    // Add more products as needed
  ];

  try {
    await Product.insertMany(products);
    console.log('Products added');
    mongoose.disconnect();
  } catch (err) {
    console.error(err.message);
    mongoose.disconnect();
  }
};

connectDB().then(addProducts);
