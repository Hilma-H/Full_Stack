const mongoose = require('mongoose')
const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    likes: Number
  })

module.exports = mongoose.model('Blog', blogSchema)