const e = require("express");
const express = require("express");
const multer = require("multer");
const path = require("path");
const { title } = require("process");

const app = express();
const PORT = 8080;

/**
 * temp DB
 * 임시 데이터 배열형태로 만들어서 화면에 띄워주는 작업
 */

let tempDB = [
  {
    contentID: 1,
    title: "글 제목1",
    content: "글 내용1",
    img: null, //null or path(string)
  },
  {
    contentID: 2,
    title: "글 제목2",
    content: "글 내용2",
    img: null, //null or path(string)
  },
  {
    contentID: 3,
    title: "글 제목3",
    content: "글 내용3",
    img: null, //null or path(string)
  },
  {
    contentID: 4,
    title: "글 제목4",
    content: "글 내용4",
    img: null, //null or path(string)
  },
];

const userID = "boanoa";

//미들웨어 설정
/**
 * 미들웨어란?
 * 요청(request)과 응답(reponse) 사이에서 중간다리 역할을 하는 소프트웨어
 * ex1) request의 body를 서버에서 읽을 수 있도록 도와주는 "body-parser"
 * ex2) request의 file에서 보내는 파일정보를 확인할 수 있도록 도와주는 "multer"
 * ex3) static 파일 설정을 도와주는 app.use(express.static(~~))
 */

/** 미들웨어 1. views 설정( set() 이용 )
 * - view란?
 *      사람들 눈에 보이는 화면, 프론트단 html
 *  view 설정
 *  1. html 파일들을 어디서 모아둘 건지(views 폴더 설정)
 *  2. html을 보여주기 위해서 어떻게 하건지 (view engine)
 * - view engine (ejs)
 *  서버에서 보낸 js변수를 클라이언트에서 사용할 수 있도록 돕는다.
 *  pug, ejs, nunjucks, 등등이 있지만 html과 가장 유사한 것은 ejs
 *
 */

app.set("view engine", "ejs");
app.set("views", "./views");

/**
 * 미들웨어 2. static 폴더 설정
 *  - static 폴더란?
 *      외부(브라우저 등의 client)에서 접근 가능한 폴더
 *      프론트 js, css, 이미지, 동영상 등
 */

app.use("/static", express.static(__dirname + "/public")); //인자를 두개 쓰면 가상경로
app.use("/uploads", express.static(__dirname + "/uploads")); //인자 한개로 쓰면 저 경로로 접근하겠다라는 의미

/** 미들웨어 3. body-parser 설정 (express 내장 모듈)
 *  - req.body 는 기본적으로 undefined
 *  - body-parser가 req.body를 서버측에서 사용할 수 있도록 파싱(parsing) 해줌 - 데이터를 변경?해주는것
 */
//true: queryString 모듈 사용, false: qs 모듈 사용
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //요청 body에서 내가 필요한 객체 정보만 추출할 수 있도록 도와준다.

/** 미들웨어 4. multer 설정 ( npm install multer, 설치 필요 )
 *  - req.body input type="file" 의 정보는 string
 *      실제 파일 업로드를 하고, 파일 정보를 확인하기 위해서 사용한다.
 *  - dest
 *  - storage
 */

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/");
    },

    filename: function (req, file, done) {
      /**
       * extname(파일명): 확장자 추출
       * basename(파일명, 확장자): 확장자를 제외한 파일명만 추출
       * basename(경로명): (확장자 포함된) 파일명 추출
       */
      const extension = path.extname(file.originalname);
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 },
});

// ###라우팅
/**
 *  특정 url로 특정 method에 대한 요청을 처리하는 것
 *  - url: 사용자가 정한 url,
 *  - method: get, post, put, patch, delete
 *      CRUD를 위한 것(CRUD: 데이터를 create, read, update, delete)
 *      1. get : 'R'ead,
 *          - 브라우저의 url에 주소를 입력하는 것은 모두 get 요청!
 *          - ex) localhost:8080/sesac 의 화면을 보기 위해서는 /sesac에 대한 응답(response)이 있어야 볼 수 있다.
 *                res.send(), res.end(), res.write() - 응답이 끝나지 않아서 끝나는 부분을 작성해야한다., res.render(), ...
 *      2. post : 'C'reate 새로운 정보를 "입력", "추가"할때
 *      3. put & patch : 'U'pdate 수정 관련 메소드 (일부수정 patch, 전체수정 put)
 *      4. delete : 'D'elete 삭제 메소드
 */
app.get("/", function (req, res) {
  res.render("index.ejs", {
    user: userID,
    contentData: tempDB, //[{},{}]
  });
});

/**
 * params VS query
 * - params
 *      : 서버에서 url 표기 /:params
 *      : 클라이언트에서 요청시 /123
 *      : req.params 에서 정보 확인가능 {params:'123'}
 *      : 네이버 블로그처럼 여러 계정의 글을 "조회"할때 ==> params
 * - query
 *      : 서버에서 url 표기 /sesac
 *      : 클라이언트에서 url 표기 /sesac?id=123&content=123
 *      : req.query에서 정보 확인 가능 {id: '123', content: '123'}
 *      : 검색, 필터링 기능 ==> query
 */
// content/1 content/2 content/3,....
app.get("/content/:contentID", (req, res) => {
  //   console.log(req.params); //contentID : '1'
  // req.params.contentID
  const { contentID } = req.params;

  // tempDB의 contentID 와 params 로 들어오는 contentID 비교
  const isContent = tempDB.filter(
    (obj) => obj.contentID === Number(contentID)
  )[0];
  console.log(isContent); // 객체{}이거나, undefined

  /**
   {
    contentID: 1,
    title: "글 제목1",
    content: "글 내용1",
    img: null, //null or path(string)
    },
   */
  if (isContent) {
    res.render("content", isContent);
    // res.render("content", {
    //     ...isContent,
    //     userNmae: "boanoa"
    // });
  } else {
    res.render("404");
  }
  //   res.send("hi");
});

// 새글 작성하기 화면 렌더링
// /content/write 이런식으로 작성하면 안됨!! write를 params로 파악하게 된다!
app.get("/write", function (req, res) {
  res.render("writeContent");
});

//
app.post("/blog/post", upload.single("img"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  tempDB.push({
    contentID:
      tempDB.length !== 0 ? tempDB[tempDB.length - 1].contentID + 1 : 1,
    title: req.body.title,
    content: req.body.content,
    img: req.file ? req.file.path : null, //null or path(string)
  });
  console.log(tempDB);
  res.redirect("/");
});

app.delete("/blog/delete", (req, res) => {
  console.log(req.query);

  const { contentID } = req.query;
  tempDB = tempDB.filter((obj) => obj.contentID !== Number(contentID));
  console.log(tempDB);

  //   res.send("okkk");
  res.end();
});

// 지정해 놓은 거 아닐때
app.get("*", (req, res) => {
  res.render("404");
});

// ### 포트열기
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
