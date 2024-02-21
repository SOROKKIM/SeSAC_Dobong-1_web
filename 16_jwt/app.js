const express = require("express");
const app = express();
const PORT = 8080;
const jwt = require("jsonwebtoken");
const SECRET = "Um54Y4szBu0LOidWxmUDl7S3RodtPp"; //랜덤 문자열

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userInfo = { id: "cocoa", pw: "1234", name: "코코아", age: 18 };

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// 로그인 요청
// jwt 생성
app.post("/login", (req, res) => {
  try {
    console.log(req.body);
    // res.send("서버 콘솔 확인");
    const { id: realId, pw: realPw } = userInfo;
    const { id, pw } = req.body;

    if (id === realId && pw === realPw) {
      //jwt 인증 토큰 생성
      //   const token = jwt.sign(payload, secret/private key, option)
      const token = jwt.sign({ id: id }, SECRET);
      console.log(token);
      res.send({ result: true, token: token });
    } else {
      res.send({ result: false, message: "로그인 정보가 올바르지 않습니다." });
    }
  } catch (error) {
    console.log("POST /login", err);
    res.status(500).send("server error");
  }
});

//token 정보 확인
app.post("/token", (req, res) => {});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
