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
  response.render("index.ejs");
});
app.listen(PORT, function () {
  console.log("http://localhost:" + PORT);
});
