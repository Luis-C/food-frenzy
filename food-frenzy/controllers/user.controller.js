const userService = require("../services/user.service");
const jwt = require("jsonwebtoken");
const config = require("../config.json");

module.exports = {
  authenticate,
  getAllUsers,
  register,
  update,
};

function authenticate(req, res, next) {
  console.log("Authenticate():", req.body);
  userService
    .authenticate(req.body)
    .then((user) =>
      user
        ? res.json(user)
        : res.status(400).json({ message: "Username or password is incorrect" })
    )
    .catch((err) => next(err));
}

function getAllUsers(req, res, next) {
  console.log("getting users");
  userService
    .getAllUsers(req.body)
    .then((users) => res.json(users))
    .catch((err) => next(err));
}

function register(req, res, next) {
  console.log("registering user");
  userService
    .addUser(req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
}
function update(req, res, next) {
  console.log("updating a user");
  console.log(req.body);
  userService
    .update(req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
}
