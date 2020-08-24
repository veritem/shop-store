const express = require('express')
const { route } = require('./auth')
const router = express.Router()

const { protect } = '../middleware/auth'

const { getCategories, getCategory, addCategory, updateCategory, deleteCategory } = require('../controllers/category')

router.get('/', getCategories)
router.get('/:id', getCategory)
router.post('/', protect, addCategory)
router.put('/:id', protect, updateCategory)
router.delete('/:id', protect, deleteCategory)

module.exports = router
