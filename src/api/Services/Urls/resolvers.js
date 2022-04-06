const CreateUrl = require('../../Controllers/Urls/createUrl')
const DeleteUrl = require('../../Controllers/Urls/deleteUrl')
const EditUrl = require('../../Controllers/Urls/editUrl')
const GetUrls = require('../../Controllers/Urls/getUrls')
const decodeToken = require('../../Middlewares/authNormal')

module.exports = {
  Query: {
    getUrls: async (_, args, context) => {
      const auth = decodeToken(context)

      if (auth) {
        return JSON.parse(await GetUrls(auth.sub))
      }

      return null
    }
  },
  Mutation: {
    createUrl: async (_, { name, link }, context) => {
      const auth = decodeToken(context)

      if (auth) {
        return await CreateUrl(name, link, auth.sub)
      }

      return null
    },
    editUrl: async (_, { id, name, link }, context) => {
      const auth = decodeToken(context)

      if (auth) {
        return await EditUrl(id, name, link)
      }

      return null
    },
    deleteUrl: async (_, { id }, context) => {
      const auth = decodeToken(context)

      if (auth) {
        return await DeleteUrl(id)
      }

      return null
    }
  }
}
