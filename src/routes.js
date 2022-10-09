const express = require('express')
const TaskController = require('./controllers/TaskController')

const routes = express.Router()

routes.get('/', (req, res) => {
  console.log(req.body)

  return res.status(200).json({ body: req.body })
})

routes.post('/task', TaskController.create)

module.exports = routes
