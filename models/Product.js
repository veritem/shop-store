const mongoose = require('mongoose')
const slugify = require('slugify')

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},

	slug: {
		type: String,
		unique: true,
	},
	productImage: {
		type: String,
	},
	price: {
		type: Number,
		require: true,
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
})

ProductSchema.pre('save', async function (next) {
	this.slug = slugify(this.name, { lower: true })
	next()
})
module.exports = mongoose.model('Product', ProductSchema)
