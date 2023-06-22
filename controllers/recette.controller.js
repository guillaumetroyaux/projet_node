const db = require("../models");

const Recette = db.Recette;

const User = db.user;

exports.getRecettes = async (req, res) => {
  let recettes = await Recette.find();
  res.json(recettes);
};

exports.getRecette = async (req, res) => {
  let { id } = req.params;
  let recette = await Recette.findById(id);
  res.json(recette);
};

exports.createRecette = async (req, res) => {
  const { title, content, author } = req.body;
  console.log(req.body);
  let recette = await Recette.create({
    title: title,
    content: content,
    author: author,
  });
  user.save();
  res.json(recette);
};

exports.updateRecette = async (req, res) => {
  let { id } = req.params;
  const { title, content, author } = req.body;
  let recette = await Recette.findByIdAndUpdate(id, {
    title: title,
    content: content,
    author: author,
  });
  res.json(recette);
};

exports.deleteRecette = async (req, res) => {
  let { id } = req.params;
  await Recette.deleteOne({ _id: id });
  res.send("Success");
};
