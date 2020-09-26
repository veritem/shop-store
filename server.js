const express = require('express')
const connectDB = require('./config/db')
const colors = require('colors')
const errorHandler = require('./middleware/error')
const FileUpload = require('express-fileupload')
const path = require('path')
const cors = require('cors')

require('dotenv').config({ path: './config/config.env' })
const app = express()

//body parser
app.use(express.json())
app.use(cors())

//connect server to the database
connectDB()

//configure file upload
app.use(FileUpload())

//setting up static folder
app.use(express.static(path.join(__dirname, 'public')))

// routes
const auth = require('./routes/auth')
const category = require('./routes/cetegory')
const product = require('./routes/product')
const payments = require('./routes/payment')

app.use('/api/auth', auth)
app.use('/api/category', category)
app.use('/api/product', product)
app.use('/api/payment', payments)

//error handling
app.use(errorHandler)

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running ${process.env.NODE_ENVIRONMENT} mode on port ${process.env.PORT}`
      .cyan
  )
})

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  server.close(() => process.exit(1))
})
