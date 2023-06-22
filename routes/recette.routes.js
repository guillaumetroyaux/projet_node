/**
 * @swagger
 * /recettes:
 *   get:
 *     summary: Récupérer toutes les recettes
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Succès
 *   post:
 *     summary: Créer une nouvelle recette
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             content:
 *               type: string
 *             author:
 *               type: string
 *     responses:
 *       200:
 *         description: Succès
 *
 * /recettes/{id}:
 *   get:
 *     summary: Récupérer une recette par son ID
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la recette à récupérer
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Succès
 *   patch:
 *     summary: Mettre à jour une recette existante
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la recette à mettre à jour
 *         required: true
 *         type: string
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             content:
 *               type: string
 *             author:
 *               type: string
 *     responses:
 *       200:
 *         description: Succès
 *   delete:
 *     summary: Supprimer une recette existante
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la recette à supprimer
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Succès
 *
 * securityDefinitions:
 *   BearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 *     description: Utiliser le format `Bearer {token}`
 */

const {
  getRecettes,
  getRecette,
  createRecette,
  updateRecette,
  deleteRecette,
} = require("../controllers/recette.controller");
const authenticateToken = require("../middleware/authenticateToken");

module.exports = function (app) {
  app.get("/recettes", authenticateToken, getRecettes);
  app.get("/recettes/:id", authenticateToken, getRecette);
  app.post("/recettes", authenticateToken, createRecette);
  app.patch("/recettes/:id", authenticateToken, updateRecette);
  app.delete("/recettes/:id", authenticateToken, deleteRecette);
};
