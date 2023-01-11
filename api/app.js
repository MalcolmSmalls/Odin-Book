require('dotenv').config()
const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const routes = require("./routes")
const cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Member = require('./models/member')
const bcrypt = require('bcryptjs')


const mongoDb = process.env.MONGO
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	next();

})

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

passport.serializeUser(function(member, done) {
    done(null, member.id);
  });
  
  passport.deserializeUser(function(id, done) {
    Member.findById(id, function(err, member) {
      done(err, member);
    });
  });


  

app.post(
	"/log-in", (req, res, next) => {
        passport.authenticate("local", {successRedirect: "/"}, (err, member, info) => {
            if (err) {
                return next(err);
            }
            if( !member ) {
                return res.status(401).send(info.message)
            }

            req.login(member, loginErr => {
                if(loginErr){
                    return next(loginErr);
                }
                return res.send({user: member})
            })
            
        })(req, res, next)

});

passport.use(
	new LocalStrategy((username, password, done) => {
		Member.findOne({username: username}, (err,member) => {
			if(err) {
				return done(err);
			}
			if(!member) {
				return done(null, false, { message: "Incorrect username" });
			}

      bcrypt.compare(password, member.password, (err, res) => {
        if(res) {
          return done(null, member)
        } else {
          return done(null, false, { message: "Incorrect password" });
        }
      })

			// return done(null, member)
      
		})

	})

)

app.listen(5000, () => console.log("app listening on port 5000!"));

