const schemasUsers = require('./Users/schemas')
const resolversUsers = require('./Users/resolvers')
const schemasUrls = require('./Urls/schemas')
const resolversUrls = require('./Urls/resolvers')
const schemasAuth = require('./Auth/schemas')
const resolversAuth = require('./Auth/resolvers')

module.exports = {
  typeDefs: [schemasUsers, schemasUrls, schemasAuth],
  resolvers: [resolversUsers, resolversUrls, resolversAuth]
}
