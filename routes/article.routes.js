/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Récupère tous les articles
 *     responses:
 *       200:
 *         description: Liste des articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 *   post:
 *     summary: Crée un nouvel article
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             recette:
 *               type: string
 *             author:
 *               type: string
 *     responses:
 *       201:
 *         description: L'article a été créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 * /articles/{id}:
 *   get:
 *     summary: Récupère un article par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'ID de l'article à récupérer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: L'article a été récupéré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       404:
 *         description: L'article demandé n'a pas été trouvé
 *   patch:
 *     summary: Met à jour un article par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'ID de l'article à mettre à jour
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Les détails de l'article à mettre à jour
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       200:
 *         description: L'article a été mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       404:
 *         description: L'article demandé n'a pas été trouvé
 *   delete:
 *     summary: Supprime un article par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'ID de l'article à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: L'article a été supprimé avec succès
 *       404:
 *         description: L'article demandé n'a pas été trouvé
 */

const {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/article.controller");
const authenticateToken = require("../middlewares/authenticateToken");

module.exports = function (app) {
  app.get("/articles", authenticateToken, getArticles);
  app.get("/articles/:id", getArticle);
  app.post("/articles", authenticateToken, createArticle);
  app.patch("/articles/:id", updateArticle);
  app.delete("/articles/:id", deleteArticle);
};
