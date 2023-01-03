const express = require("express");
const testAPI = express.Router();

testAPI.get("/", (req, res) => {
	res.send("API is working properly");
});

module.exports = testAPI