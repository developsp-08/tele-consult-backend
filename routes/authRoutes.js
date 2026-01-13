/*
    Create by Nattawut.C
    refector 11/11/2024
*/

const express = require('express');
const authControllers = require('../controllers/authControllers');
const router = express.Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login and get token
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: success and get token back
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 role:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     alleles:
 *                       type: integer
 *                     isolates:
 *                       type: integer
 *                     genomes:
 *                       type: integer
 *       401:
 *         description: login failed
 */
router.post('/login', authControllers.login);

module.exports = router;
