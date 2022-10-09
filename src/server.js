const express = require('express')
const database = require('./database/index')
const routes = require('./routes')
const app = express()

app.use(express.json())
app.use(routes)
database()

app.listen(3000, () => {
  console.log('server rodando na porta 3000')
})
