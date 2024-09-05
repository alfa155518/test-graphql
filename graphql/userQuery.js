const userType = require("./types");
const userController = require("../controllers/user");
const { GraphQLList, GraphQLID } = require("graphql");

const query = {
  users: {
    type: new GraphQLList(userType),
    description: "this is all users in system",
    resolve: (_, args) => {
      return userController.getAllUser();
    },
  },
  userById: {
    type: userType,
    description: "this is single user return",
    args: {
      id: {
        // type: new GraphQLNonNull(GraphQLID),
        type: GraphQLID,
        description: "this is the search id",
      },
    },
    resolve: (_, args) => {
      return userController.singleUser(args.id);
    },
  },
};

module.exports = query;
