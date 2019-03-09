const express = require('express')
const app = express()
const port = 3001

const getUsers = require('./mocks/users')
const getTasks = require('./mocks/tasks')

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', (req, res) => res.send(getUsers.getUsers()))

app.get('/tasks', (req, res) => res.send(getTasks.getTasks()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
