const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
  user_id: {
    type: String,
    ref: 'User',
    require: true,
  },
  products: [
    {
      product: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        name: {
          type: String,
          require: true,
        },
        imageUrl: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 0,
        },
        description: {
          type: String,
        },
        price: {
          type: String,
        },
      },
    },
  ],
  last_updated: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Cart', CartSchema)
