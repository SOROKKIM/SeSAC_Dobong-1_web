const models = require("../models");

//GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render("index");
};

//GET /visitor => localhost:PORT/visitor
exports.getVisitors = (req, res) => {
  //1. db연결 전 임시 데이터베이스
  //   console.log(Visitor.getVisitors());
  //   res.render("visitor", { data: Visitor.getVisitors() }); //배열 형태

  //2. 실제 db연결 후
  // Visitor.getVisitors((result) => {
  //데이터베이스의 정보를 가지고 온 다음에 처리할 문장 씀
  // console.log("Cvisitor.js 전체 목록::", result);
  // res.render("visitor", { data: result });
  // });
  //3. [sequelize 연결]
  models.Visitor.findAll().then((result) => {
    console.log("findAll >>", result);
    res.render("visitor", { data: result });
  });
};

// GET /visitor/:id 개별 조회
exports.getVisitor = (req, res) => {
  console.log(req.params);
  console.log(req.params.id);

  //   Visitor.getVisitor(req.params.id, (result) => {
  //     console.log("Cvisitor.js 데이터 한개 조회", result); // {} 형태
  //     res.send(result);
  //   });

  //[after sequelize]
  // `SELECT * FROM visitor WHERE id=${id}`
  models.Visitor.findOne({
    where: { id: req.params.id },
  }).then((result) => {
    console.log(result); //{} 형태로 한개만 온다.
    res.send(result);
  });
};

// post /visitor
exports.postVisitor = (req, res) => {
  console.log(req.body); //{id, name, comment} 형태

  //   Visitor.postVisitor(req.body, (result) => {
  //     console.log("Cvisitor.js post", result);
  //     res.send({ id: result, name: req.body.name, comment: req.body.comment });
  //   });

  //[after sequelize]
  // `INSERT INTO visitor VALUES(null, '${data.name}', '${data.comment}')`
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    console.log("등록 result", result);
    // res.send({ id: result.id, name: req.body.name, comment: req.body.comment });
    res.send(result);
  });
};

// //delete /visitor
exports.deleteVisitor = (req, res) => {
  console.log(req.body);

  //[before sequelize]
  //   console.log(req.body.id);
  //   Visitor.deleteVisitor(req.body.id, (result) => {
  //     console.log("Cvisitor.js delete", result);
  //     res.send(req.body.id + "번 방명록 삭제 완료");
  //   });

  //[after sequelize]
  //`DELETE FROM visitor WHERE id=${id}`
  models.Visitor.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log("sequelize destroy result", result); //1(true) 0(false)
    res.send(req.body.id + " 번 방명록 삭제 완료");
  });
};

// //PATCH /visitor
exports.patchVisitor = (req, res) => {
  console.log(req.body); //{id, name, comment}

  //[before sequelize]
  //   Visitor.patchVisitor(req.body, (result) => {
  //     console.log("Cvisitor.js patch", result);
  //     res.send("수정완료");
  //   });

  //[after sequelize]
  //`UPDATE visitor SET name='${data.name}', comment='${data.comment}'
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: { id: req.body.id },
    }
  );
};
