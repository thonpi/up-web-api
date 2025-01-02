const userModel = require("../service/user");

const getUsers = async (req, res) => {
  const usersPigination = await userModel.getUsers(req.query || {});
  res.json({
    statusCode: 200,
    description: "Successfully fetched users",
    data: usersPigination,
  });
};

const getUserById = async (req, res) => {
  const user = await userModel.getUserById(parseInt(req.params.id));

  res.json({
    statusCode: user ? 200 : 404,
    description: user
      ? "Successfully fetched user by id"
      : `User with id ${req.params.id} not found`,
    data: { user: user ? user : null },
  });
};

const createUser = async (req, res) => {
  const user = await userModel.createUser(req.body);
  res.send("create user", 200, { user });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
};
