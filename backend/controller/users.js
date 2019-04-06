const users = require('../mocks/users')

const getUsers = () => {
  return users 
}

const getUserByName = (userName) => {
  return users.find(element => element.name === userName)
}

module.exports = {
  getUsers,
  getUserByName
}