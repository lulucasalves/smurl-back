const schemasUsers = require('./Users/schemas')
const resolversUsers = require('./Users/resolvers')
const schemasUrls = require('./Urls/schemas')
const resolversUrls = require('./Urls/resolvers')

module.exports = {
  typeDefs: [schemasUsers, schemasUrls],
  resolvers: [resolversUsers, resolversUrls]
}
