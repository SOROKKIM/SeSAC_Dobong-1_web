const express = require("express");
const PORT = 8080;
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const indexRouter = require("./routes/index");
const indexRouter = require("./routes");
//localhost:8080/ 경로를 기본으로 하는 경로는 indexRouter에서 처리한다.
app.use("/", indexRouter);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
