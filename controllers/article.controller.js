const db = require("../models");

const Article = db.article;

const Recette = db.Recette;

const User = db.user;

exports.getArticles = async (req, res) => {
  let articles = await Article.find();
  res.json(articles);
};

exports.getArticle = async (req, res) => {
  let { id } = req.params;
  let article = await Article.findById(id);
  res.json(article);
};

exports.createArticle = async (req, res) => {
  const { title, recette, author } = req.body;
  console.log(req.body);
  let article = await Article.create({
    title: title,
    recette: content,
    author: author,
  });
  let article1 = new Article({
    title: "Le nom de la recette",
    recette: "recette",
    author: "nom de l'utilisateur",
  });
  article1.save();
  let user = new User({
    name: "Le nom de la personne",
    type: "belle",
    size: "178cm",
  });
  user.save();
  res.json(article);
};

exports.updateArticle = async (req, res) => {
  let { id } = req.params;
  const { title, recette, author } = req.body;
  let article = await Article.findByIdAndUpdate(id, {
    title: title,
    recette: recette,
    author: author,
  });
  res.json(article);
};

exports.deleteArticle = async (req, res) => {
  let { id } = req.params;
  await Article.deleteOne({ _id: id });
  res.send("Success");
};
