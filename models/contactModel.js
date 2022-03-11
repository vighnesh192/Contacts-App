const mongoose = require('mongoose')

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a secret'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
    },
    number: {
      type: Number,
      required: [true, 'Please add a contact number'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Contact', contactSchema)