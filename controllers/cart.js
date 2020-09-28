const asyncHandler = require('../middleware/async')
const Cart = require('../models/Cart')
const ErrorResponse = require('../util/errorResponse')

exports.addtoCart = asyncHandler(async (req, res) => {
  const cartExists = await Cart.findOne({ user_id: req.user._id })
  const { product } = req.body

  if (!product) return res.status(403).json({ error: 'add product please' })

  if (!cartExists) {
    const cart_item = {
      user_id: req.user._id,
      products: [],
    }
    cart_item.products.push(product)
    const response = await Cart.create(cart_item)
    return res.status(200).json({ success: true, data: response })
  }

  cartExists.products.push(product)
  await cartExists.save()
  res.status(200).json({ success: true, data: cartExists })
})
exports.getCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user_id: req.user._id })

  if (!cart) return res.status(200).json({ success: true, data: [] })

  res.status(200).json({ success: true, data: cart })
})
exports.incrementProduct = asyncHandler(async (req, res) => {
  const { cartItemId } = req.params

  const cartExists = await Cart.findOne({ user_id: req.user._id })

  if (!cartExists) return res.status(403).json({ success: false, data: [] })

  let findItemIndex = cartExists.products
    .map((item) => item._id.toString())
    .indexOf(cartItemId)

  if (findItemIndex > -1) {
    cartExists.products[findItemIndex].quantity += 1
    await cartExists.save()
    res.status(201).json({ success: true, data: cartExists })
    return
  }

  res
    .status(201)
    .json({ success: false, data: 'No product found with this id' })
})
exports.decrementProduct = asyncHandler(async (req, res) => {
  const { cartItemId } = req.params

  const cartExists = await Cart.findOne({ user_id: req.user._id })

  if (!cartExists) return res.status(403).json({ success: false, data: [] })

  let findItemIndex = cartExists.products
    .map((item) => item._id.toString())
    .indexOf(cartItemId)

  if (findItemIndex > -1) {
    if (cartExists.products[findItemIndex].quantity > 1) {
      cartExists.products[findItemIndex].quantity -= 1
      await cartExists.save()
      res.status(201).json({ success: true, data: cartExists })
      return
    }
    res.status(201).json({ success: true, data: cartExists })
    return
  }

  res
    .status(201)
    .json({ success: false, data: 'No product found with this id' })
})

exports.removeProduct = asyncHandler(async (req, res) => {
  const { cartItemId } = req.params

  const cartExists = await Cart.findOne({ user_id: req.user._id })

  if (!cartExists) return res.status(403).json({ success: false, data: [] })

  let findItemIndex = cartExists.products
    .map((item) => item._id.toString())
    .indexOf(cartItemId)

  if (findItemIndex > -1) {
    cartExists.products.splice(findItemIndex, 1)
    await cartExists.save()
    res.status(201).json({ success: true, data: cartExists })
    return
  }

  res
    .status(201)
    .json({ success: false, data: 'No product found with this id' })
})
