const express = require("express");
const router = express.Router();
const { askQuestion } = require("../controller/controller");

router.route("/").post(askQuestion);

module.exports = router;
