const express = require("express");
const userControllers = require("../controllers/userControllers");
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/profile", verifyToken, userControllers.getProfile);

module.exports = router;
