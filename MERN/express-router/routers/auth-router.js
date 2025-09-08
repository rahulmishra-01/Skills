const express = require("express");
const router = express.Router();

router.route("/").get((req,res) => {
    res.send("Hello World");
})

router.route("/login").get((req,res) => {
    res.send("Login");
})

module.exports = router;