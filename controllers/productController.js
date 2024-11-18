const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProduct = async (req, res) => {
    try {
      const { name, price, description, imageURL } = req.body;
  
   
      if (!name || !price) {
        return res.status(400).json({ message: 'Name and price are required' });
      }
  
     
      const product = new Product({
        name,
        price,
        description,
        imageURL,
      });
  
     
      const savedProduct = await product.save();
  
    
      res.status(201).json(savedProduct);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server error' });
    }
  };

  exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, description, imageURL } = req.body;
  
    try {
      // Find the product by ID and update
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, price, description, imageURL },
        { new: true } // return the updated document
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ msg: "Product not found" });
      }
  
      res.json(updatedProduct); // Send back the updated product
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Server error" });
    }
  };