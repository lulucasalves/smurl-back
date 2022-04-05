const { gql } = require('apollo-server')

const routerUser = gql`
  type User {
    id: ID
    user: String
    email: String
    password: String
    phone: String
    confirmed: Boolean
    number_urls: Int
    created_at: String
  }

  type Auth {
    token: String
    id: String
  }

  type Query {
    getUser: User!
  }

  type Mutation {
    createUser(user: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): Auth!
    editUser(user: String!, email: String!, phone: String!): User
    deleteUser: User
    githubAuth(code: String!): Auth
  }
`

module.exports = routerUser
