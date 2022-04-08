const { ApolloServer } = require('apollo-server')
const { typeDefs, resolvers } = require('./Services')
require('./Config/db')

const app = new ApolloServer({
  cors: {
    origin: '*',
    credentials: true
  },
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    request: req.headers.authorization
  })
})

module.exports = app
