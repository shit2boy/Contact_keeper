const { Router } = require("express");
const express = require("express");
const router = express.Router();

//@Route Post api/users
// @desc \\\register a user
//@access PUBLIC
router.post("/", (req, res) => {
  res.send("Register your Nigga");
});

module.exports = router;
