const GetUsers = require('../../controllers/Users/getUsers')
const Login = require('../../controllers/Users/login')
const Register = require('../../controllers/Users/register')

module.exports = {
  Query: {
    getUsers: async (_, { id }) => {
      return JSON.parse(await GetUsers(id))
    }
  },
  Mutation: {
    createUser: async (_, { user, email, password }) => {
      return await Register(user, email, password)
    },
    login: async (_, { email, password }) => {
      return await Login(email, password)
    }
  }
}
