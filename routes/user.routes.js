/**
 * @swagger
 * /login:
 *   post:
 *     summary: Connecte un utilisateur existant et renvoie un token JWT
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: Succès - renvoie un token JWT au format Bearer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT au format Bearer
 *       401:
 *         description: Nom d'utilisateur ou mot de passe incorrect
 *
 * /register:
 *   post:
 *     summary: Crée un nouvel utilisateur dans la base de données
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       500:
 *         description: Erreur interne du serveur
 */
const { login, register } = require("../controllers/utilisateur.controller");

module.exports = function (app) {
  app.post("/login", login);
  app.post("/register", register);
};
