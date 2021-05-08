const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {type: String, required: true},
    title: {type: String, required: true, min: [1, "Please enter a Title for your post"]},
    body: {type: String, required: true, min: [1, "Please enter a Body for your post"]},
    replies: {type: Array},
    createdAt: {type: Date}
});


const Post = mongoose.model("Post", postSchema);

module.exports = Post;
