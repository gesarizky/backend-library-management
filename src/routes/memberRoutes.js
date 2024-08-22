import express from "express";
import {
  getMembers,
  addMember,
  updateMember,
  deleteMember,
} from "../controllers/memberController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Members
 *   description: API for managing members
 */

/**
 * @swagger
 * /api/members:
 *   get:
 *     summary: Get all members
 *     tags: [Members]
 *     responses:
 *       200:
 *         description: List of members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Member'
 *   post:
 *     summary: Create a new member
 *     tags: [Members]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Member'
 *     responses:
 *       201:
 *         description: Member created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Member'
 */

/**
 * @swagger
 * /api/members/{code}:
 *   put:
 *     summary: Update a member
 *     tags: [Members]
 *     parameters:
 *       - in: path
 *         name: code
 *         schema:
 *           type: string
 *         required: true
 *         description: The member code
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Member'
 *     responses:
 *       200:
 *         description: Member updated
 *   delete:
 *     summary: Delete a member
 *     tags: [Members]
 *     parameters:
 *       - in: path
 *         name: code
 *         schema:
 *           type: string
 *         required: true
 *         description: The member code
 *     responses:
 *       200:
 *         description: Member deleted
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Member:
 *       type: object
 *       required:
 *         - code
 *         - name
 *       properties:
 *         code:
 *           type: string
 *           description: Unique identifier for the member
 *         name:
 *           type: string
 *           description: Name of the member
 *         penalty:
 *           type: boolean
 *           description: Whether the member has a penalty
 *       example:
 *         code: M001
 *         name: Alice Smith
 *         penalty: false
 */


router.get("/members", getMembers);
router.post("/members", addMember);
router.put("/members/:code", updateMember);
router.delete("/members/:code", deleteMember);

export default router;
