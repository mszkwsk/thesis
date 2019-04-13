const users = require('../mocks/users')

const getUsers = () => {
  return users 
}

const getUserByName = (userName) => {
  return users.find(user => user.name === userName)
}

const getUserById = (id) => {
  return users.find(user => user.id === id)
}

module.exports = {
  getUsers,
  getUserByName,
  getUserById,
}