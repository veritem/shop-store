const express = require('express')
const router = express.Router()

const {
  getProduct,
  getProducts,
  addProduct,
  deleteProduct,
  searchProducts,
} = require('../controllers/product')
const advancedResults = require('../middleware/advancedResults')

const { protect } = require('../middleware/auth')
const Product = require('../models/Product')

router.get('/', advancedResults(Product, 'category'), getProducts)
router.get('/search', searchProducts)
router.get('/:id', getProduct)
router.post('/', protect, addProduct)
router.delete('/:id', protect, deleteProduct)

module.exports = router
