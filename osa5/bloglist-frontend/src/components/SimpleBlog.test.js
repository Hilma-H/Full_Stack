import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup } from 'react-testing-library'
import SimpleBlog from './SimpleBlog'

afterEach(cleanup)

test('renders title', () => {
  const blog = {
    title: 'Otsikko tulee oikein',
    author: 'Kirjoittaja tulee oikein'
  }

  const component = render(
    <SimpleBlog blog={blog} />
  )

  expect(component.container.title).toHaveTextContent(
    'Otsikko tulee oikein'
  )
  expect(component.container.author).toHaveTextContent(
    'Kirjoittaja tulee oikein'
  )
})