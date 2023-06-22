const mongoose = require("mongoose");

/**
 * @swagger
 *   models:
 *     Recette:
 *       type: object
 *       properties:
 *         nom:
 *           type: string
 *         author:
 *           type: string
 *         content:
 *           type: string
 */
const schema = new mongoose.Schema({
  nom: "string",
  author: "string",
  content: "string",
});
const Recette = mongoose.model("Recette", schema);

module.exports = Recette;
