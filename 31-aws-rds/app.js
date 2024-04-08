const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const PORT = process.env.PORT;
const { Sequelize } = require("sequelize");

const userModel = require("./models/Users");

// RDS config 설정
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);
const User = userModel(sequelize);

// body-parser 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api 만들기
// GET /api > "안녕하세요.." send 시켜주기
app.get("/api", (req, res) => {
  res.send("안녕하세요..");
});
// POST /api/users > user 하나 추가
app.post("/api/users", async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.create({ username, email });
    console.log(user);
    res.send("유저 추가 완료");
  } catch (error) {
    console.log(error);
    res.send({ message: "서버 오류" });
  }
});
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("테이블 생성 완료!!");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("sync err!!");
    console.log(err);
  });
