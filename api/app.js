require('dotenv').config()
const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const indexRouter = require('./routes/index')
const testAPIRouter = require('./routes/testAPI')
const cors = require('cors')


const mongoDb = process.env.MONGO
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));


const app = express();
app.set("views", __dirname);
app.set("view engine", "ejs");

app.use(cors())

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter)
app.use("/testAPI", testAPIRouter)

app.listen(9000, () => console.log("app listening on port 9000!"));