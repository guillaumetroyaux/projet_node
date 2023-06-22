const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
const Utilisateur = mongoose.model("Utilisateur", schema);

module.exports = Utilisateur;
