const db = require("../models");

const Article = db.article;
const User = db.user;

exports.likeArticle = async (req, res) => {
  try {
    const { articleId, userId } = req.body;

    const article = await Article.findById(articleId);
    if (!article) {
      return res.status(404).json({ error: "Article non trouvé" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    // Vérifier si l'utilisateur a déjà liké l'article
    const isLiked = article.likes.includes(userId);
    if (isLiked) {
      return res
        .status(400)
        .json({ error: "L'utilisateur a déjà liké cet article" });
    }

    // Ajouter l'utilisateur à la liste des likes de l'article
    article.likes.push(userId);
    await article.save();

    res.json({ message: "Article liké avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Une erreur est survenue lors du like de l'article" });
  }
};

exports.unlikeArticle = async (req, res) => {
  try {
    const { articleId, userId } = req.body;

    const article = await Article.findById(articleId);
    if (!article) {
      return res.status(404).json({ error: "Article non trouvé" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    // Vérifier si l'utilisateur a déjà liké l'article
    const isLiked = article.likes.includes(userId);
    if (!isLiked) {
      return res
        .status(400)
        .json({ error: "L'utilisateur n'a pas liké cet article" });
    }

    // Retirer l'utilisateur de la liste des likes de l'article
    article.likes = article.likes.filter((like) => like.toString() !== userId);
    await article.save();

    res.json({ message: "Article unliké avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Une erreur est survenue lors du unlike de l'article" });
  }
};
