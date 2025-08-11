import { Router } from "express";
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Expenses
 *   description: Gestión de gastos
 */

/**
 * @swagger
 * /expenses:
 *   get:
 *     summary: Listar todos los gastos
 *     tags: [Expenses]
 *     responses:
 *       200:
 *         description: Lista de gastos
 */
router.get("/", (req, res) => {
  res.json([]);
});

/**
 * @swagger
 * /expenses:
 *   post:
 *     summary: Crear un nuevo gasto
 *     tags: [Expenses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [amount, description, categoryId]
 *             properties:
 *               amount:
 *                 type: number
 *               description:
 *                 type: string
 *               categoryId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Gasto creado
 */
router.post("/", (req, res) => {
  res.json({ message: "Gasto creado" });
});

/**
 * @swagger
 * /expenses/{id}:
 *   put:
 *     summary: Actualizar un gasto
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gasto actualizado
 */
router.put("/:id", (req, res) => {
  res.json({ message: "Gasto actualizado" });
});

/**
 * @swagger
 * /expenses/{id}:
 *   delete:
 *     summary: Eliminar un gasto
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gasto eliminado
 */
router.delete("/:id", (req, res) => {
  res.json({ message: "Gasto eliminado" });
});

export default router;
