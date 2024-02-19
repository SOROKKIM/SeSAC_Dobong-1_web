const express = require("express");
const app = express();
const PORT = 8080;
const db = require("./models");

//middleware
app.set("views", "./views");
app.set("view engine", "ejs");
// app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//라우터 분리
//const indexRouter = require("./routes/index");
const indexRouter = require("./routes");
app.use("/", indexRouter);

// [추가] /user
const userRouter = require("./routes/user");
app.use("/user", userRouter);

//404 에러
app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then((result) => {
  // console.log(result);
  console.log("DB연결 성공");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
