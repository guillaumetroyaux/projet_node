const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./utilisateur.model");
db.recette = require("./recette.models");

module.exports = db;
