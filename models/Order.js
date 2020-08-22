const mongoose = require('mongoose')

const Orders = new mongoose.Schema({
	amount: {
		type: Number,
	},
	last_updated: {
		Date: Date,
		default: Date.now,
	},
})
