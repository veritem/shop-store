const mongoose = require('mongoose')
const slugify = require('slugify')

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      unique: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      require: true,
    },
    inStock: {
      type: Number,
      required: true,
    },
    category: {
      required: true,
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    autoIndex: false,
  }
)

ProductSchema.pre('save', async function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})
module.exports = mongoose.model('Product', ProductSchema)
