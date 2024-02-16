const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

//기본주소 :  localhost:PORT

//렌더링
//GET / => localhost:PORT/
router.get("/", controller.main);

//GET /visitor => localhost:PORT/visitor
router.get("/visitors", controller.getVisitors);

router.get("/visitor/:id", controller.getVisitor);

//등록 수정 삭제
router.post("/visitor", controller.postVisitor);
router.patch("/visitor", controller.patchVisitor);
router.delete("/visitor", controller.deleteVisitor);

module.exports = router;
