require('dotenv').config()
const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const routes = require("./routes")
const cors = require('cors')
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { allowedNodeEnvironmentFlags } = require('process');


const mongoDb = process.env.MONGO
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join( __dirname, 'views'));
app.set("view engine", "ejs");




app.use(logger('dev'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes.index)
app.use("/member", routes.member)
app.use("/testAPI", routes.testAPI)
app.use('/messages', routes.message)

app.listen(9000, () => console.log("app listening on port 9000!"));


