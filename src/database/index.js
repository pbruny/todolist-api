const mongoose = require('mongoose')
require('dotenv').config()

const database = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  try {
    mongoose.connect(
      `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@pbrunydev.uhyxl.mongodb.net/?retryWrites=true&w=majority`,
      connectionParams
    )
    console.log('Database connected succesfully')
  } catch (error) {
    console.log('Failed to connect database')
    console.log(error)
  }
}

module.exports = database
