const express = require('express');
const { getProducts, getProduct, createProduct } = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');
const productController = require('../controllers/productController');

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post('/', protect, admin, createProduct);
router.put('/:id', productController.updateProduct);

module.exports = router;
