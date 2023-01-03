const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StatusSchema = new Schema ({
    message: { type: String, required: true, maxLength: 280, minLength: 1 },
    author: { type: Schema.Types.ObjectId, ref: "Member", required: "true"},
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    comments: { type: Schema.Types.ObjectId, ref: "Comment"},
    date: { type: Date, default: Date.now }
});


StatusSchema.virtual("url").get( () => {
    return `/status/${this.id}`
})


module.exports = mongoose.model('Status', StatusSchema)