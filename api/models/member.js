const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MemberSchema = new Schema ({
    username: { type: String, required: true, maxLength: 15, minLength: 1 },
    email: { type: String, required: true},
    password: {type: String, required: true},
    // likes: { type: Number, default: 0 },
    // dislikes: { type: Number, default: 0 },
    // comments: { type: Schema.Types.ObjectId, ref: "Comment"},
    dateJoined: { type: Date, default: Date.now }
});


MemberSchema.virtual("url").get( () => {
    return `/member/${this.id}`
})


module.exports = mongoose.model('Member', MemberSchema)