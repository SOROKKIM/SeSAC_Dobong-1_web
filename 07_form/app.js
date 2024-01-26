const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
// app.set("views", "./practice");
//body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //json 형식으로 데이터를 주고 받음

app.get("/", function (req, res) {
  res.render("index");
});

//실습1
// app.get("/", function (req, res) {
//   res.render("practice1");
// });
// app.get("/getPracForm", function (req, res) {
//   console.log(req.query);
//   //   res.send("데이터 잘 받았습니다.");
//   res.render("result", {
//     title: "GET",
//     userInfo: req.query,
//   });
// });

//실습2
// app.get("/", function (req, res) {
//   res.render("practice2");
// });

// app.post("/postPracForm", function (req, res) {
//   // post 요청은 request.body에 담겨져 옵니다!
//   console.log(req.body);
//   //   res.send("포스트 요청 성공!~~");
//   res.render("result", {
//     title: "POST",
//     userInfo: req.body,
//   });
// });

app.get("/getForm", function (req, res) {
  console.log(req.query);
  //   res.send("데이터 잘 받았습니다.");
  res.render("result", {
    title: "GET",
    userInfo: req.query, //{id: , email: ,pw: }의 형태
  });
});

app.post("/postForm", function (req, res) {
  // post 요청은 request.body에 담겨져 옵니다!
  console.log(req.body);
  //   res.send("포스트 요청 성공!~~"); send와 render는 같이 쓰지 못한다
  console.log("안녕하세요");
  res.render("result", {
    title: "POST",
    userInfo: req.body, //{id2: , pw2:'', agree: [] }의 형태
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
