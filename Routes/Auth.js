const { Router } = require("express");
const express = require("express");
const router = express.Router();

//@Route GET api/auth
// @desc Get looged in user
//@access Private
router.get("/", (req, res) => {
  res.send("Get logged Nigga");
});

//@Route Post api/auth
// @desc AUTH user & get token
//@access Private
router.post("/", (req, res) => {
  res.send("log in Nigga");
});

module.exports = router;
