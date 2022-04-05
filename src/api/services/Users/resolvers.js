const DeleteUser = require('../../controllers/Users/deleteUser')
const EditUser = require('../../controllers/Users/editUser')
const GetUsers = require('../../controllers/Users/getUsers')
const Login = require('../../controllers/Users/login')
const Register = require('../../controllers/Users/register')
const decodeToken = require('../../middlewares/authNormal')
const GithubAuth = require('../../middlewares/authGithub')

module.exports = {
  Query: {
    getUser: async (_, args, context) => {
      const auth = decodeToken(context)

      if (auth) {
        return JSON.parse(await GetUsers(auth.sub))
      }

      return null
    }
  },
  Mutation: {
    githubAuth: async (_, { code }) => {
      return await GithubAuth(code)
    },
    createUser: async (_, { user, email, password }) => {
      return await Register(user, email, password)
    },
    login: async (_, { email, password }) => {
      return await Login(email, password)
    },
    editUser: async (_, { user, email, phone }, context) => {
      const auth = decodeToken(context)

      if (auth) {
        return await EditUser(auth.sub, user, email, phone)
      }

      return null
    },
    deleteUser: async (_, args, context) => {
      const auth = decodeToken(context)

      if (auth) {
        return await DeleteUser(auth.sub)
      }

      return null
    }
  }
}
