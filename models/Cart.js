const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
  user_id: {
    type: String,
    ref: 'User',
    require: true,
    unique: true,
  },
  products: [
    {
      name: {
        type: String,
        require: true,
      },
      imageUrl: {
        type: String,
        require: true,
      },
      quantity: {
        type: Number,
        default: 0,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
    },
  ],
  last_updated: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Cart', CartSchema)
