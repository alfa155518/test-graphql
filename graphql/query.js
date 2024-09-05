const { GraphQLObjectType, GraphQLID, GraphQLList } = require("graphql");
const userQuery = require("./userQuery");
const queryType = new GraphQLObjectType({
  name: "Query",
  description: "this is the query type",
  fields: {
    ...userQuery,
  },
});

module.exports = queryType;
