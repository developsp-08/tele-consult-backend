const express = require("express");
const router = express.Router();
const homeControllers = require("../controllers/homeControllers");

router.get("/test", homeControllers.getTest);

module.exports = router;
