const Product = require('../models/Product')
const ErrorResponse = require('../util/errorResponse')
const asyncHandler = require('../middleware/async')

exports.getProducts = async (req, res) => {
  const products = await Product.find()
  res
    .status(200)
    .json({ count: products.length, success: true, data: products })
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
  const { name, description, price, inStock, imageUrl } = req.body

  if (!name | !description | !price | !inStock | !imageUrl)
    return next(new ErrorResponse('All filed are required', 403))

  //   const file = req.files.file

  //   //Make sure file is a photo
  //   if (!file.mimetype.startsWith('image')) {
  //     return next(new ErrorResponse(`Please upload an image file`, 400))
  //   }

  //   if (file.size > process.env.FILE_UPLOAD_SIZE) {
  //     return next(
  //       new ErrorResponse(
  //         `Please upload an image less than ${process.env.FILE_UPLOAD_SIZE}`,
  //         400
  //       )
  //     )
  //   }

  //   //create custom filenane
  //   file.name = `photo_${profile._id}${path.parse(file.name).ext}`

  //   file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
  //     if (err) {
  //       return next(
  //         new ErrorResponse(`Problem occured while uploading file`, 500)
  //       )
  //     }
  //   })

  const newProduct = await Product.create({
    name,
    description,
    price,
    imageUrl,
    inStock,
  })

  res.status(200).json({ success: true, data: newProduct })
})

exports.deleteProduct = asyncHandler(async () => {
  const { id } = req.params
  await Product.findByIdAndRemove(id)
  res.status(200).json({ success: true })
})
