const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  imageURL: { type: String },
  category: { type: String}, 
}, {
  timestamps: true 
});

module.exports = mongoose.model('Product', ProductSchema);
