const express = require('express')
const connectDB = require('./config/db')
const colors = require('colors')
const errorHandler = require('./middleware/error')

require('dotenv').config({ path: './config/config.env' })
const app = express()

//body parser
app.use(express.json())

//connect server to the database
connectDB()

// routes
const auth = require('./routes/auth')
const category = require('./routes/cetegory')

app.use('/api/auth', auth)
app.use('/api/category', category)
//error handling
app.use(errorHandler)

const server = app.listen(process.env.PORT, () => {
	console.log(`Server is running ${process.env.NODE_ENVIRONMENT} mode on port ${process.env.PORT}`.cyan)
})

process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: ${err.message}`.red)
	server.close(() => process.exit(1))
})
