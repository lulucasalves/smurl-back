const { gql } = require('apollo-server')

module.exports = gql`
  type Token {
    token: String!
  }

  type Mutation {
    login(email: String!, password: String!): Token!
    githubLogin(code: String!): Token!
    facebookLogin(code: String!): Token!
    googleLogin(code: String!): Token!
  }
`
