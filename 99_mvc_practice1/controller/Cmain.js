const Login = require("../model/Login");

//get /라우팅주소
exports.main = (req, res) => {
  res.render("index");
};

//post /라우팅주소
exports.login = (req, res) => {
  const { id, pw } = req.body;
  // 간단한 로그인 처리
  const { id: validId, pw: validPw } = Login.loginInfo();
  if (id === validId && pw === validPw) {
    res.status(200).json({ success: true, message: "로그인 성공 야호" });
  } else {
    res.status(200).json({ success: false, message: "로그인 실패 ㅠㅠ" });
  }
};
