const express = require('express')
const router = express.Router()

const { protect } = require('../middleware/auth')
const { getCart } = require('../controllers/cart')

router.get('/', getCart)

module.exports = router
