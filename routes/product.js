const express = require('express')
const router = express.Router()

const { getProduct, getProducts, addProduct, deleteProduct } = require('../controllers/product')

const { protect } = require('../middleware/auth')

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', protect, addProduct)
router.delete('/:id', protect, deleteProduct)

module.exports = router
