const asyncHandler = require('../middleware/async')
const Cart = require('../models/Cart')

//TODO: route to add product to cart
exports.addtoCart = asyncHandler((req, res) => {})
//TODO: route to  get items from cart
exports.getCart = asyncHandler(async (req, res) => {
  const cart = Cart.findOne({ user_id: req.user.id })
  res.status(200).json({ success: true, data: cart })
})
//TODO: route to increment one item from the cart
exports.incrementProduct = asyncHandler((req, res) => {})
//TODO: route to decrement one item from the cart
exports.decrementProduct = asyncHandler((rq, res) => {})
//TODO: route to remove one item from the cart
exports.removeProduct = asyncHandler((req, res) => {})
