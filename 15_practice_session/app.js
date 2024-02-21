const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.set("views", "./views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO : 세션 설정
const sessionConfig = {
  secret: "secretKey", //필수값
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 1000 * 10, // 10분 뒤 세션종료
    httpOnly: true,
  },
};
app.use(session(sessionConfig));
const userInfo = { userId: "cocoa", userPw: "1234" };

// 2. index에 세션 정보 전달
app.get("/", (req, res) => {
  //index.ejs 로 전달
  //로그인 된 유저라면 {isLogin:true, user:user}
  //로그인 안된 유저라면 {isLogin:false}

  // TODO: user session 불러오는 부분
  const user = req.session.user; // 'cocoa'
  // 로그인이 된 유저라면 user에 cocoa가 담겨져 있음,
  // 로그인이 안된 유저라며 user는 undefined

  // user가 로그인이 됐는지 안됐는지 검사하는 부분
  console.log("유저정보", user);
  if (user) {
    // 세션에 user라는 키가 있다면, 로그인 된 상태
    res.render("index", { isLogin: true, user: user });
  } else {
    res.render("index", { isLogin: false });
  }
});

app.get("/login", (req, res) => {
  console.log(req.sessionID);
  console.log(req.session.name);
  res.render("login");
});

// TODO : 로그인 기능
// 1. 세션 설정 부분
app.post("/login", (req, res) => {
  if (req.body.id === userInfo.userId && req.body.pw === userInfo.userPw) {
    req.session.user = req.body.id; //세션 설정
    console.log(req.session);
    /**
     * Session {
        cookie: {
            path: '/',
         _expires: 2024-02-21T06:39:26.243Z,
         originalMaxAge: 600000,
         httpOnly: true
         },
        user: 'cocoa'
        }
     */
    console.log(req.sessionID);
    // _u2XFyArfNqYGMuMf9x1LBQeoD390Mzu
    res.redirect("/");
  } else {
    res.send(`
      <script>
        alert('아이디 또는 비밀번호가 일치하지 않습니다. 다시 시도해주세요.');
        document.location.href='/login';
      </script>
      `);
  }
});

// TODO : 로그아웃 기능
// 3. 세션 삭제
app.get("/logout", (req, res) => {
  // 1. 로그아웃 진행
  const user = req.session.user;
  if (user) {
    // 로그인 된 회원 >> 로그아웃 시켜주기
    req.session.destroy((err) => {
      if (err) throw err;

      res.redirect("/"); //로그아웃 종료 후 홈으로
    });
  } else {
    // session 만료된 회원
    res.send(`
    <script>
        alert("이미 만료된 세션입니다.");
        document.location.href='/';
    </script>`);
  }
  // 2. 메인페이지 렌더 (redirect)
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
