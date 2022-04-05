const { ApolloServer } = require('apollo-server')
const { typeDefs, resolvers } = require('./services')
require('./config/db')

const app = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    request: req.headers.authorization
  })
})

module.exports = app
