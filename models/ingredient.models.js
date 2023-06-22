const mongoose = require("mongoose");

const Ingredient = mongoose.model(
    "Ingredient",
    new mongoose.Schema({
        nom: String,
        description: String,
    })
    );

    module.exports= Ingredient;