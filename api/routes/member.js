const express = require('express');
const router = express.Router();

const memberController = require('../controller/memberController')


///// USER

// CREATE

router.get("/create", memberController.member_create_get);
router.post("/create", memberController.member_create_post);

// READ

router.get("/:id", memberController.member_detail);
router.get("/", memberController.member_list);

// UPDATE

router.get("/:id/update", memberController.member_update_get);
router.post("/:id/update", memberController.member_update_post);

// DELETE

router.get("/:id/delete", memberController.member_delete_get);
router.post("/:id/delete", memberController.member_delete_post);








// const express = require('express')
// const index = express.Router()

// index.get("/", (req, res) => {
//     res.render('index')
// })

module.exports = router