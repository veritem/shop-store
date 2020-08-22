const mongoose = require('mongoose')
const slugify = require('slugify')

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: ['Thisfield is required', true],
	},
	description: {
		type: String,
		required: true,
	},

	slug: String,
	productImage: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		require: true,
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
	rating: {
		type: Number,
	},
	category_name: {
		type: String,
	},
})

ProductSchema.pre('save', async (next) => {
	this.slug = slugify(this.name, { lower: true })
	next()
})
module.exports = mongoose.model('Product', ProductSchema)
