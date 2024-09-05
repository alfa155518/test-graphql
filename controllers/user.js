const User = require("../models/user");
const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

const addUser = async (args) => {
  try {
    const newUser = await User.create(args);
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (args) => {
  try {
    console.log(args);
    const updatedUser = await User.findByIdAndUpdate(
      args.id,
      {
        $set: {
          name: args.name,
          email: args.email,
          address: args.address,
          phone: args.phone,
          password: args.password,
        },
      },
      {
        new: true,
      }
    );
    return updatedUser;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (id) => {
  try {
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};

const singleUser = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllUser,
  addUser,
  singleUser,
  deleteUser,
  updateUser,
};
