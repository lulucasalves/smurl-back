const { gql } = require('apollo-server')

module.exports = gql`
  type Auth {
    token: String!
    id: String!
  }

  type Mutation {
    login(email: String!, password: String!): Auth!
    githubLogin(code: String!): Auth!
    facebookLogin(code: String!): Auth!
  }
`
