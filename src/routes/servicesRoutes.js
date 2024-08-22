import express from "express";
import { borrowBook, returnBook } from "../controllers/servicesController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Borrowing
 *   description: API for borrowing and returning books
 */

/**
 * @swagger
 * /api/services/borrow:
 *   post:
 *     summary: Borrow a book
 *     tags: [Borrowing]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - memberCode
 *               - bookCode
 *             properties:
 *               memberCode:
 *                 type: string
 *               bookCode:
 *                 type: string
 *             example:
 *               memberCode: M001
 *               bookCode: B001
 *     responses:
 *       200:
 *         description: Book borrowed successfully
 *       400:
 *         description: Error message
 */

/**
 * @swagger
 * /api//services/return:
 *   post:
 *     summary: Return a book
 *     tags: [Borrowing]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - memberCode
 *               - bookCode
 *             properties:
 *               memberCode:
 *                 type: string
 *               bookCode:
 *                 type: string
 *             example:
 *               memberCode: M001
 *               bookCode: B001
 *     responses:
 *       200:
 *         description: Book returned successfully
 *       400:
 *         description: Error message
 */

router.post("/services/borrow", borrowBook);
router.post("/services/return", returnBook);

export default router;
