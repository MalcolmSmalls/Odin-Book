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
const Member = require('./models/member')


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

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

app.post(
	"/log-in",
	passport.authenticate("local", {
		successRedirect: "/right",
		failureRedirect: "/wrong"

	})

)

passport.use(
	new LocalStrategy((username, password, done) => {
		Member.findOne({username: username}, (err,member) => {
			if(err) {
				return done(err);
			}
			if(!member) {
				return done(null, false, { message: "Incorrect username" });
			}
			if (member.password !== password){

				return done(null, false, { message: "Incorrect password" });
			}

			return done(null, member)

		})

	})

)

app.listen(9000, () => console.log("app listening on port 9000!"));


