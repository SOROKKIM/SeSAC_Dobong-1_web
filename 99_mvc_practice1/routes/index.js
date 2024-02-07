const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

//localhost:8080/
router.get("/", controller.main); //GET
router.post("/login", controller.login);
router.post("/signin", controller.signin);
module.exports = router;
