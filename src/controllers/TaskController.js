const Task = require('../database/schemas/Task')

class TaskController {
  async create(req, res) {
    const { task } = req.body

    try {
      const newTask = await Task.create({
        task,
      })

      return res.status(201).json(newTask)
    } catch (error) {
      return res.status(500).send({
        error: 'Impossible to create a new task',
        message: error,
      })
    }
  }
}

module.exports = new TaskController()
