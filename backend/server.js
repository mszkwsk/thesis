const express = require('express')
const app = express()
const port = 3001

const getUsers = require('./controller/users')
const getTasks = require('./controller/tasks')

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
app.get('/user/getByName',
  (req, res) => res.send(getUsers.getUserByName(req.query.name)))
app.get('/user/getById',
  (req, res) => res.send(getUsers.getUserById(req.query.id)))

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
