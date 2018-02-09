'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

// Define our schema using the GraphQL schema language
const typeDefs = `
  type Todo {
    userId: ID!
    title: String!
  }

  type Query {
    myTodos: [Todo]
  }

  type Mutation {
    addTodo (title: String!): Todo
  }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })
