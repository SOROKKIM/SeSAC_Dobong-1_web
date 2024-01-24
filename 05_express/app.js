const express = require("express");
const app = express();

const PORT = 8080;

//미들웨어 설정
app.set("view engine", "ejs");
app.set("views", "./views");
//스태틱한거 모아두기 (이미지 등등...?)
app.use("/static", express.static(__dirname + "/public"));

app.get("/", (requset, response) => {
  //   response.send("hello express!! 안녕하세요 익스프레스");

  // render의 두번째 인자에서 index.ejs에서 사용할 정보 전달
  response.render("index.ejs", {
    btns: ["apple", "banana"],
    isLogin: false,
    userInfo: {
      name: "boa",
      msg: "점심 먹었나요?",
    },
  });
});

//라우팅
app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

//page not found 404 페이지는 맨 마지막에 설정
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, function () {
  console.log("http://localhost:" + PORT);
});
