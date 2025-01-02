const express = require("express");
const userControler = require("./controller/user");

const route = express.Router();

route.get("/users", userControler.getUsers);
route.get("/users/:id", userControler.getUserById);
route.post("/users", userControler.createUser);

module.exports = route;
