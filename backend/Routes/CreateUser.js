const express = require("express");
const router = express.Router();
const User = require('../model/User')

router.post("/createuser", async (req, res) => {
  try {
    await User.create({
      name: "Bhomesh Razdan",
      location: "Unknown",
      email: "unknown@gmail.com",
      password: "123",
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
