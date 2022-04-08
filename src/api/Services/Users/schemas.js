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

  type Token {
    token: String!
  }

  type Query {
    getUser: User!
  }

  type Mutation {
    forgotPassword(email: String!): Response!
    returnForgotPassword(token: String!, newPassword: String!): Response!
    createUser(email: String!, password: String!): Token!
    editUser(email: String!, phone: String!): Response!
    changePassword(oldPassword: String!, newPassword: String!): Response!
    deleteUser: Response!
  }
`
