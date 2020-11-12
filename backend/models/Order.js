const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  user: {
    required: true,
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  products: [
    {
      product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  shippingAddress: {
    type: String,
    required: true,
  },
  isShipped: {
    type: Boolean,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Category', OrderSchema)
