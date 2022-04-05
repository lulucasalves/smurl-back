const { gql } = require('apollo-server')

const router = gql`
  type User {
    id: ID
    user: String
    email: String
    password: String
    phone: String
    confirmed: Boolean
    number_urls: Int
  }

  type Auth {
    token: String
    id: String
  }

  type Query {
    getUsers(id: String!): User!
  }

  type Mutation {
    createUser(user: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): Auth!
  }
`

module.exports = router
