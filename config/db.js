const mongoose = require('mongoose')

const connectDB = async () => {
	const conn = await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	console.log(`MongoDb connected: ${conn.connection.host}`.yellow)
}

module.exports = connectDB
