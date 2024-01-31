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
app.use("/uploads", express.static(__dirname + "/uploads")); //upload가 어느경로에 있는지 알려줌
// app.use("/public", express.static(__dirname + "/public")); 이런식으로 사용 가능함
app.use("/static", express.static(__dirname + "/public"));
//app.use('/이 이름으로 사용할 것', express.static(실제 폴더 경로))

//body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//multer
const upload = multer({
  dest: "uploads/", //경로
});

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
/**
 * multer 디테일 설정
 * - storage 저장공간에 정보
 *      diskStorage 파일을 저장하가 위한 모든 제어기능 제공
 *      destination 저장 경로
 *      filename 파일 이름 관련 정보
 * - limits 파일 제한 관련 정보
 *      fileSize 파일 사이즈를 바이트 단위로 제한
 */

//라우팅
app.get("/", (req, res) => {
  res.render("index");
});

// app.post("/upload", upload.single("userfile"), (req, res) => {
app.post("/uploads", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);

  // 전송된 파일 정보들
  //   {
  //     fieldname: 'userfile', // 폼에 정의한 name 값
  //     originalname: 'SPRING (1).png', // 원본 파일명
  //     encoding: '7bit', //file encoding type
  //     mimetype: 'image/png', //파일 타입
  //     destination: 'uploads/', //파일 저장 경로
  //     filename: 'ba1136d7520fe8d9bb8926af60d4e1ae', //저장된 파일 이름
  //     path: 'uploads/ba1136d7520fe8d9bb8926af60d4e1ae', 경로 포함된 파일이름
  //     size: 11345 //byte 기준 파일 크기
  //   }

  res.send("파일 업로드 완료~~");
});

app.post("/uploads/array", uploadDetail.array("multifiles"), (req, res) => {
  console.log(req.files); //[{..}, {}] 배열로 요청됨, 파일을 하나만 업로드 해도 배열로 날아옴
  console.log(req.body); //파일 외의 정보
  res.send("파일 업로드 완료~~");
});

app.post(
  "/uploads/fields",
  uploadDetail.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
  ]),
  function (req, res) {
    console.log(req.files);
    /**
     * {file1:[{},{}], file2:[{}], name속성: [{}, {}, ..]}
     */
    console.log(req.body);
    res.send("업로드 완료!!!!!!!!");
  }
);

//동적 파일 업로드
app.post("/dynamicUpload", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  //   res.send({...req.file, ...req.body});
  /**
   *
   */
  res.send({ title: req.body, fileInfo: req.file });

  /**
   * {
   *    title: '푸',
   *    fileInfo: {
  //     fieldname: 'userfile', // 폼에 정의한 name 값
  //     originalname: 'SPRING (1).png', // 원본 파일명
  //     encoding: '7bit', //file encoding type
  //     mimetype: 'image/png', //파일 타입
  //     destination: 'uploads/', //파일 저장 경로
  //     filename: 'ba1136d7520fe8d9bb8926af60d4e1ae', //저장된 파일 이름
  //     path: 'uploads/ba1136d7520fe8d9bb8926af60d4e1ae', 경로 포함된 파일이름
  //     size: 11345 //byte 기준 파일 크기
   *    }   
   * }
   */
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!`);
  console.log(`http://localhost:${PORT}`);
});
