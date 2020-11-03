const User = require('../models/User')
const ErrorResponse = require('../util/errorResponse')
const asyncHandler = require('../middleware/async')

exports.register = asyncHandler(async (req, res, next) => {
  const { names, email, password } = req.body

  if (!names || !email || !password)
    return res.status(403).json({ error: 'All fields are required' })

  const user = await User.create({
    names,
    email,
    password,
  })
  sendTokenResponse(user, 201, res)
})
exports.login = async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    return next(new ErrorResponse('Please Provide an email and password', 400))
  }

  const user = await User.findOne({ email }).select('+password')

  if (!user) {
    return next(new ErrorResponse('Invalid Credentials', 401))
  }

  const isMatch = await user.matchPasswords(password)

  if (!isMatch) {
    return next(new ErrorResponse('Invalid Credientials', 401))
  }

  sendTokenResponse(user, 200, res)
}
exports.getMe = async (req, res, next) => {
  res.status(200).json({ user: req.user })
}
exports.updateDetails = async (req, res, next) => {
  const fieldToUpdate = {
    names: req.body.names,
    email: req.body.email,
  }

  if (!fieldToUpdate.names || !fieldToUpdate.email) {
    return next(new ErrorResponse('No data passed', 401))
  }

  const user = await User.findByIdAndUpdate(req.user.id, fieldToUpdate, {
    new: true,
    runValidators: true,
  })
  res.status(200).json({
    user,
  })
}
exports.updatePassword = async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password')

  const { currentPassword, newPassword } = req.body

  if (!currentPassword || !newPassword) {
    return next(new ErrorResponse('Invalid credentials'))
  }

  if (!(await user.matchPasswords(currentPassword))) {
    return next(new ErrorResponse('password is incorrect', 401))
  }
  user.password = newPassword

  await user.save()
  sendTokenResponse(user, 200, res)
}

const sendTokenResponse = (user, statusCode, res) => {
  const token = user.generateJwtToken()
  res.status(statusCode).json({ token })
}
