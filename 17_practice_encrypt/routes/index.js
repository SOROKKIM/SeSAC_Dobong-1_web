const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

//기본주소 :  localhost:PORT

//렌더링
//GET / => localhost:PORT/
router.get("/", controller.main);

module.exports = router;
