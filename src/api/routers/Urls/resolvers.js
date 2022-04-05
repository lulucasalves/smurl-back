const CreateUrl = require('../../controllers/Urls/createUrl')
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
        const data = await CreateUrl(name, link, auth.sub)
        return data
      }

      return null
    }
  }
}
