const transactionService = require("../services/transaction.service");

module.exports = {
  bump,
  buy,
};

function bump(req, res, next) {
  console.log("bump");
  if (req.body.type === "increase") {
    console.log("increase");
    transactionService
      .increaseBump(req.body)
      .then((r) => res.json(r))
      .catch((err) => next(err));
  } else {
    transactionService
      .decreaseBump(req.body)
      .then((r) => res.json(r))
      .catch((err) => next(err));
  }
}

function buy(req, res, next) {
  if (req.body.type === "increase") {
    console.log("increase");
    transactionService
      .increaseBuy(req.body)
      .then((r) => res.json(r))
      .catch((err) => next(err));
  } else {
    transactionService
      .decreaseBuy(req.body)
      .then((r) => res.json(r))
      .catch((err) => next(err));
  }
}
