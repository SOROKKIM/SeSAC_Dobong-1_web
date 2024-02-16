const express = require("express");
const app = express();
// console.log(process.env);

// .env에서 만들어둔 환경변수를 읽어오기 위한 설정
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  console.log("mysql 패스워드", process.env.MYSQL_PASSWORD);
  console.log("API_KEY", process.env.API_KEY);

  res.send("응답완료");
});

app.listen(8080, () => {
  console.log(`8080 is open`);
});
