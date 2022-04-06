const { gql } = require('apollo-server')

module.exports = gql`
  type User {
    id: ID
    email: String
    password: String
    phone: String
    confirmed: Boolean
    number_urls: Int
    created_at: String
  }

  type Response {
    error: Boolean!
    message: String!
  }

  type Query {
    getUser: User!
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
    editUser(email: String!, phone: String!): Response!
    changePassword(oldPassword: String!, newPassword: String!): User
    deleteUser: Response!
  }
`
