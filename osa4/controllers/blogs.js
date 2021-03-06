const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

blogsRouter.get('/', (request, response) => {
    Blog
      .find({})
      .populate('user', {username: 1, name: 1})
      .then(result => {
        response.json(result)
      })
  })

blogsRouter.post('/', async (request, response, next) => {
    const body = request.body
    const token = getTokenFrom(request)

    try {
      const decodedToken = jwt.verify(token, config.SECRET)
      if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
      }
    const user = await User.findById(decodedToken.id)

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      user: user._id
    })
    
      const savedBlog = await blog.save()
      user.blogs = user.blogs.concat(savedBlog._id)
      await user.save()
      response.json(savedBlog.toJSON())
    } catch(exception) {
      next(exception)
    }
  })

  blogsRouter.delete('/:id', (request, response) => {
    Blog.findByIdAndDelete(request.params.id)
      .then(result => {
        response.status(204).end()
      })
  })

module.exports = blogsRouter