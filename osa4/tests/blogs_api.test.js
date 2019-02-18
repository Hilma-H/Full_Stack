const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('notes are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('How many blogs are there', async () => {
    const response = await api.get('/api/blogs')
  
    expect(response.body.length).toBe(8)
  })

test('a valid blog can be added ', async () => {
    const res = await api.get('/api/blogs')
    const sum = res.body.length
    const newblog = {
      title: "Testiblogi",
      author: "Testaaja",
      url: "something",
      likes: 0
    }
  
    await api
      .post('/api/blogs')
      .send(newblog)
      .expect(201)
      .expect('Content-Type', /application\/json/)
  
    const response = await api.get('/api/blogs')
  
    expect(response.body.length).toBe(sum+1)
  })

afterAll(() => {
  mongoose.connection.close()
})