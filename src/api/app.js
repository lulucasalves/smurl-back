const { ApolloServer } = require('apollo-server')
const { typeDefs, resolvers } = require('./routers')
require('./config/db')

const app = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    request: req.headers.authorization
  })
})

module.exports = app
