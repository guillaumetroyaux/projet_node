const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  article: {
    type: Schema.Types.ObjectId,
    ref: "Article",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
