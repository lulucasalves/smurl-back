const DeleteUser = require('../../Controllers/Users/deleteUser')
const EditUser = require('../../Controllers/Users/editUser')
const GetUsers = require('../../Controllers/Users/getUsers')
const Register = require('../../Controllers/Users/register')
const decodeToken = require('../../Middlewares/authNormal')
const ChangePassword = require('../../Controllers/Users/changePassword')

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

      return null
    },
    changePassword: async (_, { oldPassword, newPassword }, context) => {
      const auth = decodeToken(context)

      if (auth) {
        return await ChangePassword(auth.sub, oldPassword, newPassword)
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
