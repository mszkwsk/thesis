const tasks = require('../mocks/tasks')

function getTasks() {
  return tasks
}

function getLatest() {
  return tasks.filter((element => {
    const {creationDate, modificationDate} = element
    if (modificationDate && modificationDate.includes('2019')) {
      return true
    } else {
      return creationDate.includes('2019')
    }
  }))
}

function getTasksCreatedByUser(userName) {
  return tasks.filter((element) => element.userName === userName)
}

function getTaskById(id) {
  return tasks.find((element) => element.id === id)
}

module.exports = {
  getTasks,
  getLatest,
  getTasksCreatedByUser,
  getTaskById
}