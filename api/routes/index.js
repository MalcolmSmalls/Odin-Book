const express = require('express')
const index = express.Router()
const message = require('./message')
const member = require('./member')
const testAPI = require('./testAPI')



index.get("/", (req, res, next) => {
    // res.send(req.user);
    // console.log(req.user)
    res.send({ 
      user: req.user,
      title: 'New Data' 
    });
  });

module.exports = { testAPI, member, message, index }