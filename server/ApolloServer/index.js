const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const bodyParser = require('body-parser');
const resolvers = require('../resolver');
const {
  buildTypeDefs
} = require('../schema/index');

const createApolloServer = async (app, middlewareOptions = {}) => {
  const typeDefs = await buildTypeDefs();
  // Put together a schema
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
console.log('server started');

};

module.exports = {
  createApolloServer
};

