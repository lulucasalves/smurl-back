const CreateUrl = require('../../controllers/Urls/createUrl')
const DeleteUrl = require('../../controllers/Urls/deleteUrl')
const EditUrl = require('../../controllers/Urls/editUrl')
const GetUrls = require('../../controllers/Urls/getUrls')
const decodeToken = require('../../middlewares/auth')

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
