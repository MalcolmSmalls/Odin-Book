const Member = require('../models/member')
const bcrypt = require('bcryptjs')

// CREATE

exports.member_create_get = (req, res) => {
	res.send("NOT IMPLEMENTED: member create GET");
}

exports.member_create_post = (req, res, next) => {

  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if(err){
      return err
    } else {
      const member = new Member ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        defaultPicture: req.body.defaultPicture
      }).save(err => {
        if(err){
          return next(err)
        }
      res.redirect("/member/create")
      });
  
  
  }});







	// const member = new Member ({
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
	// 	username: req.body.username,
	// 	email: req.body.email,
	// 	password: req.body.password,
	// }).save(err => {
	// 	if(err){
	// 		return next(err)
	// 	}
	// res.redirect("/member/create")
	// });


};

// READ

exports.member_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: member detail: ${req.params.id}`);
  };
  

exports.member_list = (req, res) => {
    res.send("NOT IMPLEMENTED: member list");
  };

// UPDATE

exports.member_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: member update GET");
  };
  
  exports.member_update_post = (req, res) => {
    res.send("NOT IMPLEMENTED: member update POST");
  };

// DELETE

exports.member_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: member delete GET");
};


exports.member_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: member delete POST");
};

