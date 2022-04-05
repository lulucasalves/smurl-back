const { gql } = require('apollo-server')

const routerUrl = gql`
  type IUrls {
    link: String!
    name: String!
  }

  type Get {
    user_id: String!
    name: String!
    link: String!
    created_at: String!
  }

  type Query {
    getUrls: [Get!]!
  }

  type Mutation {
    createUrl(name: String!, link: String!): IUrls
    editUrl(id: String!, name: String!, link: String!): IUrls
    deleteUrl(id: String!): IUrls
  }
`

module.exports = routerUrl
