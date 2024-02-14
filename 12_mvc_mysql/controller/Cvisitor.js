const Visitor = require("../model/Visitor");

//GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render("index");
};

//GET /visitor => localhost:PORT/visitor
exports.getVisitors = (req, res) => {
  //db연결 전 임시 데이터베이스
  //   console.log(Visitor.getVisitors());
  //   res.render("visitor", { data: Visitor.getVisitors() }); //배열 형태

  //실제 db연결 후
  Visitor.getVisitors((result) => {
    //데이터베이스의 정보를 가지고 온 다음에 처리할 문장 씀
    console.log("Cvisitor.js 전체 목록::", result);
    res.render("visitor", { data: result });
  });
};

// GET /visitor/:id 개별 조회
exports.getVisitor = (req, res) => {
  console.log(req.params);
  console.log(req.params.id);

  Visitor.getVisitor(req.params.id, (result) => {
    console.log("Cvisitor.js 데이터 한개 조회", result); // {} 형태
    res.send(result);
  });
};

// post /visitor
exports.postVisitor = (req, res) => {
  console.log(req.body); //{id, name, comment} 형태

  Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor.js post", result);
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  });
};

//delete /visitor
exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log("Cvisitor.js delete", result);
    res.send("번 방명록 삭제 완료");
  });
};

//PATCH /visitor
exports.patchVisitor = (req, res) => {
  console.log(req.body); //{id, name, comment}

  Visitor.patchVisitor(req.body, (result) => {
    console.log("Cvisitor.js patch", result);
    res.send("수정완료");
  });
};
