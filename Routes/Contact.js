const { Router } = require("express");
const express = require("express");
const router = express.Router();

//@Route Get api/contacts
// @desc \\ User's contacts
//@access Private
router.get("/", (req, res) => {
  res.send("View your Niggas");
});

//@Route Post api/contacts
// @desc \\Add User's contacts
//@access Private
router.post("/", (req, res) => {
  res.send("Add your Niggas");
});

//@Route Put api/contacts/id
// @desc \\Add User's contacts
//@access Private
router.put("/:id", (req, res) => {
  res.send("Update your Niggas");
});

//@Route Delete api/contacts/id
// @desc \\Add User's contacts
//@access Private
router.delete("/:id", (req, res) => {
  res.send("Delete your Niggas");
});

module.exports = router;
