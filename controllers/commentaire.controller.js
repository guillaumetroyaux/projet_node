const db = require("../models");

const Comment = db.comment;

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la récupération des commentaires",
    });
  }
};

exports.getComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if (!comment) {
      res.status(404).json({ error: "Commentaire non trouvé" });
    } else {
      res.json(comment);
    }
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la récupération du commentaire",
    });
  }
};

exports.createComment = async (req, res) => {
  try {
    const { content, author, articleId } = req.body;
    const comment = await Comment.create({
      content: content,
      author: author,
      articleId: articleId,
    });

    res.json(comment);
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la création du commentaire",
    });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const comment = await Comment.findByIdAndUpdate(id, {
      content: content,
    });

    if (!comment) {
      res.status(404).json({ error: "Commentaire non trouvé" });
    } else {
      res.json(comment);
    }
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la mise à jour du commentaire",
    });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByIdAndDelete(id);
    if (!comment) {
      res.status(404).json({ error: "Commentaire non trouvé" });
    } else {
      res.json({ message: "Commentaire supprimé avec succès" });
    }
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la suppression du commentaire",
    });
  }
};
