const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {type: String, required: true},
    title: {type: String, required: true},
    body: {type: String, required: true},
    replies: {type: Array},
    createdAt: {type: Date}
});


const Post = mongoose.model("Post", postSchema);

module.exports = Post;
