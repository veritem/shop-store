const Category = require('../models/Category')
const asyncHandler = require('../middleware/async')

exports.getCategories = async (req, res) => {
  const cat = await Category.find().populate('Product')
  res.status(200).json({ success: true, data: cat })
}

exports.getCategory = async (req, res) => {
  const { id } = req.params

  const catFind = await Category.findById(id)

  if (!catFind) {
    return next(new ErrorResponse('No category found with this id', 403))
  }

  res.status(200).json({ success: true, data: catFind })
}
exports.addCategory = asyncHandler(async (req, res) => {
  const { name } = req.body

  if (!name) return next(new ErrorResponse('name field is required', 403))

  const newCat = await Category.create({
    name,
  })

  res.status(201).json({ success: true, data: newCat })
})

exports.updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params
  const name = req.body

  if (!id || !name) return next(new ErrorResponse('Some thing went wrong', 403))

  const category = await Category.findByIdAndUpdate(id, name, {
    new: true,
    runValidators: true,
  })
  res.status(200).json({
    category,
  })
})

exports.deleteCategory = asyncHandler(async () => {
  const { id } = req.params
  await Category.findByIdAndRemove(id)
  res.status(200).json({ success: true })
})
