const express = require("express");
const app = express();
const PORT = 3000;

const multer = require("multer");
const path = require("path");

//##### 미들웨어 설정
//view 관련
app.set("view engine", "ejs");
app.set("views", "./views");

//static 폴더 => 프론트에서 사용하는 모음
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/uploads", express.static(__dirname + "/uploads")); //upload가 어느경로에 있는지 알려줌
app.use("/static", express.static(__dirname + "/public"));
//app.use('/이 이름으로 사용할 것', express.static(실제 폴더 경로))

//body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },

    filename: function (req, file, done) {
      const extension = path.extname(file.originalname);
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 },
});

//multer
const upload = multer({
  dest: "uploads/", //경로
});

//라우팅
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/uploads", uploadDetail.single("profile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  const profileImagePath = `/uploads/${req.file.filename}`; // 이미지 경로

  res.render("result.ejs", {
    name: req.body.name,
    profileImagePath,
    id: req.body.id,
    pw: req.body.pw,
    age: req.body.age,

    // 리더님 실습 풀이
    // src: req.file.path,
    // userInfo: req.body,
  });
});

app.post("/multer-practice", (req, res) => {
  const { id, pw, name, age } = req.body;
  console.log(req.body);
  res.send("Data received successfully");
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!`);
  console.log(`http://localhost:${PORT}`);
});
