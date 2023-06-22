const mongoose = require("mongoose");

/**
 * @swagger
 *   models:
 *     Article:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         author:
 *           type: string
 *         content:
 *           type: string
 */
const schema = new mongoose.Schema({
  title: "string",
  author: "string",
  content: "string",
});
const Article = mongoose.model("Article", schema);

module.exports = Article;
