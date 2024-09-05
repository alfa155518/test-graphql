const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
} = require("graphql");

const userController = require("../controllers/user");
const userType = require("./types");

// const userType = new GraphQLObjectType({
//   name: "User",
//   description: "This represents a user",
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     password: { type: GraphQLString },
//     email: { type: GraphQLString },
//     phone: { type: GraphQLString },
//     address: { type: GraphQLString },
//   }),
// });

// const queryType = new GraphQLObjectType({
//   name: "Query",
//   description: "this is the query type",
//   fields: {
//     users: {
//       type: new GraphQLList(userType),
//       description: "this is all users in system",
//       resolve: (_, args) => {
//         return userController.getAllUser();
//       },
//     },
//     userById: {
//       type: userType,
//       description: "this is single user return",
//       args: {
//         id: {
//           // type: new GraphQLNonNull(GraphQLID),
//           type: GraphQLID,
//           description: "this is the search id",
//         },
//       },
//       resolve: (_, args) => {
//         return userController.singleUser(args.id);
//       },
//     },
//   },
// });

// const mutationType = new GraphQLObjectType({
//   name: "Mutation",
//   description: "this is the mutation type",
//   fields: {
//     addUser: {
//       type: userType,
//       description: "this is add user",
//       args: {
//         name: { type: GraphQLString },
//         password: { type: GraphQLString },
//         email: { type: GraphQLString },
//         phone: { type: GraphQLString },
//         address: { type: GraphQLString },
//       },
//       resolve: (_, args) => {
//         return userController.addUser(args);
//       },
//     },
//     updateUser: {
//       type: userType,
//       description: "this is update user",
//       args: {
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         password: { type: GraphQLString },
//         email: { type: GraphQLString },
//         phone: { type: GraphQLString },
//         address: { type: GraphQLString },
//       },
//       resolve: (_, args) => {
//         return userController.updateUser(args);
//       },
//     },
//     deleteUser: {
//       type: userType,
//       description: "this is delete user",
//       args: {
//         id: { type: GraphQLID },
//       },
//       resolve: (_, args) => {
//         return userController.deleteUser(args.id);
//       },
//     },
//   },
// });

// const schema = new GraphQLSchema({
//   query: queryType,
//   mutation: mutationType,
// });

// module.exports = schema;
