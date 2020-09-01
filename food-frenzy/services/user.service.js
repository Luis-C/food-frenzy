const config = require("../config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const SimulatedDB = require("../_helpers/dbsimulator");
const db = require("../_helpers/database");
const User = db.User;

module.exports = {
  authenticate,
  getAllUsers,
  getByUsername,
  addUser,
  update,
};

async function authenticate({ username, password }) {
  const user = await User.findOne({ username });
  if (user && bcrypt.compareSync(password, user.hash)) {
    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
    return {
      ...userWithoutHash,
      token,
    };
  }
}

async function getAllUsers() {
  //Returning the result of the promise.
  return await User.find().select("-hash");
}

async function getByUsername(username) {
  return await User.find({ username: username }).select("-hash");
}

async function addUser(userParam) {
  console.log(userParam);

  // validate
  if (await User.findOne({ username: userParam.username })) {
    throw 'Username "' + userParam.username + '" is already taken';
  }

  const user = new User(userParam);

  // hash password
  if (userParam.password) {
    user.hash = bcrypt.hashSync(userParam.password, 10);
  }

  console.log(user);

  // save user
  await user.save();
}

/**
 * Update a user.
 * Note all fields are being updated
 * @param {User} userParam - User to be updated with new fields
 */
async function update(userParam) {
  console.log("trying to update skill. Request body: ", userParam);
  // TODO: validate ?

  if (!(await User.findOne({ username: userParam.username }))) {
    throw 'Username "' + userParam.username + '" does not exist';
  }

  User.updateOne(
    // find by unique username
    { username: userParam.username },
    {
      // modify following fields
      firstName: userParam.firstName,
      lastName: userParam.lastName,

      address: userParam.address,
      city: userParam.city,
      state: userParam.state,
      zipcode: userParam.zipcode,
      contact: userParam.contact,

      bumpable: userParam.bumpable,
      bump_limit: userParam.bump_limit,
      bump_period: userParam.bump_period,
      buyable: userParam.buyable,
      buy_limit: userParam.buy_limit,
      buy_period: userParam.buy_period,
      allergies: userParam.allergies,
      friends: userParam.friends,
      requests: userParam.requests,
      history: userParam.history,
    },
    (err, affected, resp) => {
      if (err) console.log(err);
      else {
        // NOTE: might want to do something here
        console.log("response: ", resp);
        console.log("Affected: ", affected);
      }
    }
  );
}
