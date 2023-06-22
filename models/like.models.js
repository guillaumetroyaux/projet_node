const mongoose = require("mongoose");
const { Schema } = mongoose;

const likeSchema = new Schema({
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
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
