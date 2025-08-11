import { Router } from "express";
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Gestión de categorías
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Listar categorías
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Lista de categorías
 */
router.get("/", (req, res) => {
  res.json([]);
});

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Crear una categoría
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoría creada
 */
router.post("/", (req, res) => {
  res.json({ message: "Categoría creada" });
});

export default router;
