const express = require('express')

// const { protect } = require('../middleware/auth')

const { handlePay } = require('../controllers/payment')

const router = express.Router()

router.post('/', handlePay)

module.exports = router
