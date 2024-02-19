// TODO: 컨트롤러 코드
// const models = require("../models/index");
const models = require("../models");

//GET /user/signin
exports.get_signin = (req, res) => {
  res.render("signin");
};
//GET /user/signup
exports.get_signup = (req, res) => {
  res.render("signup");
};

//POST /user/signup
//회원가입 요청
exports.post_signup = (req, res) => {
  //   console.log("controller", req.body); // {userid, pw, name}
  //   User.post_signup(req.body, () => {
  //     res.end();
  //   });
  //   const sql = `INSERT INTO user (userid, name, pw) VALUES ('${req.body.userid}','${req.body.name}','${req.body.pw}') `;

  //create가 위의 insert 구문 역할을 해준다.
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log("회원가입 요청", result);
    /**
     * result의 형태
     * User {
        dataValues: { id: 6, userid: 'boaboa', name: '보오오아', pw: '1234' },
         _previousDataValues: { userid: 'boaboa', name: '보오오아', pw: '1234', id: 6 },
         uniqno: 1,
        _changed: Set(0) {},
        _options: {
         isNewRecord: true,
            _schema: null,
            _schemaDelimiter: '',
            attributes: undefined,
            include: undefined,
            raw: undefined,
            silent: undefined
         },
        isNewRecord: false
        }
     */
    console.log(result.id);
    res.end();
  });
};

//POST /user/signin
//로그인 요청
exports.post_signin = (req, res) => {
  //   console.log("controller", req.body); // {userid, pw}
  //   User.post_signin(req.body, (result) => {
  //     //result == rows -> User.js의 cb(rows)임
  //     console.log("controller", result);

  //     //로그인 성공 시, true를 뷰로 전달
  //     //로그인 실패 시, false 뷰로 전달

  //     if (result.length > 0) {
  //       //   res.send({isLogin:true, userInfo:result[0]});
  //       res.send(true);
  //     } else {
  //       res.send(false);
  //     }
  //   });

  // [sequelize 적용]
  //   const sql = `SELECT * FROM user
  // WHERE userid='${req.body.userid}' AND pw='${req.body.pw}' LIMIT 1`;

  //findOne은 객체 하나만 반환한다. LIMIT 없어도 괜찮다!
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
    //findAll 했을떄는 [{},{}] 이런 형태이다!
  }).then((result) => {
    // result: findOne을 이용해서 찾은 결과를 반환하거나
    // 데이터를 못찾았다면 null 반환
    console.log("로그인 요청", result);
    if (result) {
      /**
       * result 형태
       * { id: 6, userid: 'boaboa', name: '보오오아', pw: '1234' }
       */
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

//POST /user/profile
//프로필 페이지 띄워줌
exports.post_profile = (req, res) => {
  //   console.log("req.body", req.body);
  //   //{userid}
  //   User.post_profile(req.body.userid, (result) => {
  //     console.log(result); // {id, userid, name, pw}형태
  //     res.render("profile", { data: result });
  //   });

  // [sequelize 적용]
  const sql = `SELECT * FROM user WHERE userid='${req.body.userid}' LIMIT 1`;

  models.User.findOne({
    where: {
      userid: req.body.userid,
    },
  }).then((result) => {
    console.log("프로필 페이지 요청", result);
    res.render("profile", { data: result });
  });
};

//POST /user/profile/edit
//회원 정보 수정 요청
exports.edit_profile = (req, res) => {
  //   console.log("req.body", req.body);
  //   User.edit_profile(req.body, () => {
  //     res.end();
  //   });

  // [sequelize 적용]
  //   const sql = `UPDATE user set name='${req.body.name}', pw='${req.body.pw}' WHERE id='${req.body.userid}'`;

  models.User.update(
    {
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { id: req.body.id },
    }
  ).then((result) => {
    console.log("프로필 정보 수정", result);
    //수정성공 : [1], 수정실패:[0]
    //where 조건에 해당하는 레코드를 못찾았을때 실패!

    res.end();
  });
};

//POST /user/profile/delete
//회원 정보 삭제
exports.delete_profile = (req, res) => {
  //   console.log(req.body); // {id: form.in.value}
  //   User.delete_profile(req.body.id, () => {
  //     res.end();
  //   });

  // [sequelize 적용]
  //   const sql = `DELETE FROM visitor WHERE id=${req.body.id}`;

  models.User.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log("프로필 정보 삭제 ", result);
    // 삭제 성공 : 1, 삭제실패 : 0
    res.end();
  });
};
ㅞ;
