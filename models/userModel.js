const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    secret: {
      type: String,
      required: [true, 'Please add a secret'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)