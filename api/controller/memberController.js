const Member = require('../models/member')

// CREATE

exports.member_create_get = (req, res) => {
	res.send("NOT IMPLEMENTED: member create GET");
}

exports.member_create_post = (req, res, next) => {
	const member = new Member ({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	}).save(err => {
		if(err){
			return next(err)
		}
	res.redirect("/member/create")
	});
    console.log(member)

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

