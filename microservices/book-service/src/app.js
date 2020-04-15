'use strict'

const express = require('express')
const app = express()

const response = {
  data: [],
  services: 'Book Services',
  architecture: 'Microservices'
}

const logger = (message) => console.log('[ Book Service ]: ' + message)

app.use((req, res, next) => {
  response.data = []
  next()
})

app.get('/api/v2/books', (req, res) => {
  response.data.push('la celestina', 'Don Quijote')
  logger('Get book data')
  return res.send(response)
})

module.exports = app
