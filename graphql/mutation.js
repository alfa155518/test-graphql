const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");
const userType = require("./types");
const userController = require("../controllers/user");
const mutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "this is the mutation type",
  fields: {
    addUser: {
      type: userType,
      description: "this is add user",
      args: {
        name: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        address: { type: GraphQLString },
      },
      resolve: (_, args) => {
        return userController.addUser(args);
      },
    },
    updateUser: {
      type: userType,
      description: "this is update user",
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        address: { type: GraphQLString },
      },
      resolve: (_, args) => {
        return userController.updateUser(args);
      },
    },
    deleteUser: {
      type: userType,
      description: "this is delete user",
      args: {
        id: { type: GraphQLID },
      },
      resolve: (_, args) => {
        return userController.deleteUser(args.id);
      },
    },
  },
});

module.exports = mutationType;
