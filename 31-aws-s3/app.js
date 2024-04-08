const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const app = express();
dotenv.config();
const PORT = process.env.PORT;

// 미들웨어 설정
app.set("view engine", "ejs");

// aws 설정
aws.config.update({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_S3_REGION,
});

const s3 = new aws.S3();

//s3 관련 멀터 설정
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: "public-read", //파일 접근 권한
    key: (req, file, cb) => {
      cb(null, Date.now.toString() + "-" + file.originalname);
    },
  }),
});

// GET / index.ejs 렌더링
app.get("/", (req, res) => {
  res.render("index", { imageUrl: "" });
});

// POST /upload
app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  // req.file
  //   {
  //     fieldname: 'image',
  //     originalname: 'PS20092801144.jpg',
  //     encoding: '7bit',
  //     mimetype: 'image/jpeg',
  //     size: 24166,
  //     bucket: 'bucket-boah',
  //     key: 'function now() { [native code] }-PS20092801144.jpg',
  //     acl: 'public-read',
  //     contentType: 'application/octet-stream',
  //     contentDisposition: null,
  //     contentEncoding: null,
  //     storageClass: 'STANDARD',
  //     serverSideEncryption: null,
  //     metadata: null,
  //     location: 'https://bucket-boah.s3.ap-northeast-2.amazonaws.com/function%20now%28%29%20%7B%20%5Bnative%20code%5D%20%7D-PS20092801144.jpg',
  //     etag: '"a8b2d2a04a81f101b0ba187d0f6cf341"',
  //     versionId: undefined
  //   }
  //   res.send("이미지 업로드 중...");
  res.render("index", { imageUrl: req.file.location });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
