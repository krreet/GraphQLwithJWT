const { makeExecutableSchema } = require('graphql-tools')
    const resolvers = require('./resolvers')
    // Imports: GraphQL

    const { ApolloServer , gql } = require('apollo-server-express')
// import { ApolloServer } from 'apollo-server-express';
// // Imports: GraphQL
// import { gql } from 'apollo-server-express';

    // Define our schema using the GraphQL schema language
    const typeDefs =  gql`
      type User {
        id: Int!
        username: String!
        email: String!
      }

      type Query {
        me: User
      }

      type Mutation {
        signup (username: String!, email: String!, password: String!): String
        login (email: String!, password: String!): String
      }
    `

    // GraphQL: Schema
const SERVER = new ApolloServer({
    typeDefs,
    resolvers,
    context:  ({req, res}) => ({
                  user: req.user
                }),

                //req.protocol + '://' + req.get('host') + req.originalUrl;
    playground: {
     // endpoint: `http://localhost:${process.env.PORT || 3000}/graphql`,
      endpoint: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
      settings: {
        'editor.theme': 'light'
      }
    }
  });
// Exports
module.exports = SERVER;