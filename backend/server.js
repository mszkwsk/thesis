const express = require('express')
const app = express()
const port = 3001

const getUsers = require('./operations/users')
const getTasks = require('./operations/tasks')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

// Users endpoints
app.get('/users', 
  (req, res) => res.send(getUsers.getUsers()))

// Tasks endpoints
app.get('/tasks', 
  (req, res) => res.send(getTasks.getTasks()))
app.get('/tasks/latest', 
  (req, res) => res.send(getTasks.getLatest()))
app.get('/tasks/getById',
  (req, res) => res.send(
    getTasks.getTaskById(req.query.taskId)
  )
)


app.listen(port, () => 
  console.log(`Thesis backend app listening on port ${port}!`))
