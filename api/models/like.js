const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const LikeSchema = new Schema ({
    user: { type: Schema.Types.ObjectId, ref: "Member", required: "true"}
});



module.exports = mongoose.model('Like', LikeSchema)