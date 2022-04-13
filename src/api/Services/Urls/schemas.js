const { gql } = require('apollo-server')

module.exports = gql`
  type Response {
    error: Boolean!
    message: String!
  }

  type Get {
    user_id: String
    name: String
    link: String
    created_at: String
    id: String
  }

  type Query {
    getUrls: [Get!]!
    getUrl(name: String!): Get!
  }

  type Mutation {
    createUrl(name: String!, link: String!): Response!
    editUrl(id: String!, name: String!, link: String!): Response!
    deleteUrl(id: String!): Response!
  }
`
