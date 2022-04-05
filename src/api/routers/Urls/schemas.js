const { gql } = require('apollo-server')

const router = gql`
  type Create {
    link: String!
    name: String!
  }

  type Get {
    urls: String!
  }

  type Query {
    getUrls(user_id: String!): [Get!]!
  }

  type Mutation {
    createUrl(name: String!, link: String!): Create!
  }
`

module.exports = router
