const express = require('express')
const { register, login, getMe, updatePassword, updateDetails } = require('../controllers/auth')
const router = express.Router()

const { protect } = require('../middleware/auth')

router.post('/register', register)
router.post('/login', login)
router.get('/me', protect, getMe)
router.put('/updatePassword', protect, updatePassword)
router.put('/updateAccount', protect, updateDetails)

module.exports = router
