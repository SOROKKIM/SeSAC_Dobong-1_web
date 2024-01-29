const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
// app.set("views", "./views/practice");
//미들웨어 - body로 데이터를 주고 받을 수 있음
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //json 형식으로 데이터를 주고 받음

app.get("/", (req, res) => {
  res.render("index");
});

// ajax 라우팅
app.get("/ajax", (req, res) => {
  console.log(req.query);
  //   res.send("ajax 응답완료");
  // res.send({
  //     name:req.query.name,
  //     gender:req.query.gender,
  // })
  res.send(req.query);
});

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// axios
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//fetch
app.get("/fetch", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//open api 사용
app.get("/open-api", (req, res) => {
  res.render("api");
});

//실습1
app.get("/practice1", (req, res) => {
  res.render("practice/practice1.ejs");
});

//실습2
app.get("/practice2", (req, res) => {
  res.render("practice/practice2.ejs");
});

// 간단한 ID와 PW 변수로 지정
const validId = "dd";
const validPw = "123";

app.post("/practice2", (req, res) => {
  const { id, pw } = req.body;

  // 간단한 로그인 처리
  if (id === validId && pw === validPw) {
    res.status(200).json({ success: true, message: "로그인 성공 야호" });
  } else {
    res.status(200).json({ success: false, message: "로그인 실패 ㅠㅠ" });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
