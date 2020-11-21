const express = require('express')

const { protect } = require('../middleware/auth')

const {
  getCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/category')

const router = express.Router()

router.get('/', getCategories)
router.get('/:id', getCategory)
router.post('/', protect, addCategory)
router.put('/:id', protect, updateCategory)
router.delete('/:id', protect, deleteCategory)

module.exports = router
