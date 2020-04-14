'use strict'

const express = require('express')
const app = express()

const response = {
  data: [],
  services: 'Monolithic Services',
  architecture: 'Monolithics'
}

app.use((req, res, next) => {
  response.data = []
  next()
})

app.get('/api/v1/users', (req, res) => {
  response.data.push('Edward', 'edwardceb')
  return res.send(response)
})

app.get('/api/v1/books', (req, res) => {
  response.data.push('The clean code', 'The Pragmatic programmer')
  return res.send(response)
})

app.get('/api/v1/cars', (req, res) => {
  response.data.push('Ferrari', 'BMW')
  return res.send(response)
})

module.exports = app
