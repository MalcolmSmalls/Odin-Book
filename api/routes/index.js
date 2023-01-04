const express = require('express')
const index = express.Router()
const message = require('./message')
const member = require('./member')
const testAPI = require('./testAPI')



index.get("/", (req, res, next) => {
    res.render("index", { title: "Express" });
  });

module.exports = { testAPI, member, message, index }