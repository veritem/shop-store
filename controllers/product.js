const Product = require('../models/Product')
const ErrorResponse = require('../util/errorResponse')
const asyncHandler = require('../middleware/async')

exports.getProducts = async (req, res, next) => {
  res.status(200).json(res.advancedResults)
}
exports.getProduct = async (req, res) => {
  const { id } = req.params

  const findProduct = await Product.findById(id)

  if (!findProduct) return next(new ErrorResponse('No product found', 403))

  res
    .status(200)
    .json({ count: findProduct.length, success: true, data: findProduct })
}
exports.addProduct = asyncHandler(async (req, res, next) => {
  const { name, description, price, inStock, imageUrl, category } = req.body

  if ((!name | !description | !price | !inStock | !imageUrl, !category))
    return next(new ErrorResponse('All filed are required', 403))

  const newProduct = await Product.create({
    name,
    description,
    price,
    imageUrl,
    inStock,
    category,
  })

  res.status(200).json({ success: true, data: newProduct })
})

exports.deleteProduct = asyncHandler(async () => {
  const { id } = req.params
  await Product.findByIdAndRemove(id)
  res.status(200).json({ success: true })
})
