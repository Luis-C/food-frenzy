var express = require("express");
var router = express.Router();

const transactionController = require("../controllers/transaction.controller");

router.post("/buy", transactionController.buy);
router.post("/bump", transactionController.bump);

module.exports = router;
