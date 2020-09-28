const express = require('express')
const router = express.Router()

const { protect } = require('../middleware/auth')
const {
  getCart,
  addtoCart,
  removeProduct,
  incrementProduct,
  decrementProduct,
} = require('../controllers/cart')

router.get('/', protect, getCart)
router.post('/', protect, addtoCart)
router.post('/remove/:cartItemId', protect, removeProduct)
router.post('/increment/:cartItemId', protect, incrementProduct)
router.post('/decrement/:cartItemId', protect, decrementProduct)

module.exports = router
