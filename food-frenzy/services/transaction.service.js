const db = require("../_helpers/database");
const User = db.User;

module.exports = {
  increaseBump,
  decreaseBump,
  increaseBuy,
  decreaseBuy,
};

async function increaseBump(params) {
  let user = await User.findOne({ username: params.username });
  if (!user) {
    throw 'Username "' + params.username + '" does not exist';
  }

  let new_limit = user.bump_limit + params.amount;

  User.updateOne(
    // find by unique username
    { username: params.username },
    { bump_limit: new_limit },
    (err, affected, resp) => {
      if (err) console.log(err);
      else {
        return new_limit;
      }
    }
  );
}

async function decreaseBump(params) {
  let user = await User.findOne({ username: params.username });
  if (!user) {
    throw 'Username "' + params.username + '" does not exist';
  }

  let new_limit = user.bump_limit - params.amount;

  User.updateOne(
    // find by unique username
    { username: params.username },
    { bump_limit: new_limit },
    (err, affected, resp) => {
      if (err) console.log(err);
      else {
        return new_limit;
      }
    }
  );
}

async function increaseBuy(params) {
  let user = await User.findOne({ username: params.username });
  if (!user) {
    throw 'Username "' + params.username + '" does not exist';
  }

  let new_limit = user.buy_limit + params.amount;

  User.updateOne(
    // find by unique username
    { username: params.username },
    { buy_limit: new_limit },
    (err, affected, resp) => {
      if (err) console.log(err);
      else {
        return new_limit;
      }
    }
  );
}

async function decreaseBuy(params) {
  let user = await User.findOne({ username: params.username });
  if (!user) {
    throw 'Username "' + params.username + '" does not exist';
  }

  let new_limit = user.buy_limit - params.amount;

  User.updateOne(
    // find by unique username
    { username: params.username },
    { buy_limit: new_limit },
    (err, affected, resp) => {
      if (err) console.log(err);
      else {
        return new_limit;
      }
    }
  );
}
