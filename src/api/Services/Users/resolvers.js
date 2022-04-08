const DeleteUser = require('../../Controllers/Users/deleteUser')
const EditUser = require('../../Controllers/Users/editUser')
const GetUsers = require('../../Controllers/Users/getUsers')
const Register = require('../../Controllers/Users/register')
const decodeToken = require('../../Middlewares/authNormal')
const ChangePassword = require('../../Controllers/Users/changePassword')
const ForgotPassword = require('../../Controllers/Users/forgotPassword')

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
    createUser: async (_, { email, password }) => {
      return await Register(email, password)
    },
    editUser: async (_, { email, phone }, context) => {
      const auth = decodeToken(context)

      if (auth) {
        return await EditUser(auth.sub, email, phone)
      }

      return { error: true, message: 'invalid token' }
    },
    forgotPassword: async (_, { email }) => {
      return await ForgotPassword(email)
    },
    changePassword: async (_, { oldPassword, newPassword }, context) => {
      const auth = decodeToken(context)

      if (auth) {
        return await ChangePassword(auth.sub, oldPassword, newPassword)
      }

      return { error: true, message: 'invalid token' }
    },
    returnForgotPassword: async (_, { token, newPassword }) => {
      const auth = decodeToken(token)

      if (auth) {
        return await ChangePassword(auth.sub, newPassword)
      }

      return { error: true, message: 'invalid token' }
    },
    deleteUser: async (_, args, context) => {
      const auth = decodeToken(context)

      if (auth) {
        return await DeleteUser(auth.sub)
      }

      return { error: true, message: 'invalid token' }
    }
  }
}
