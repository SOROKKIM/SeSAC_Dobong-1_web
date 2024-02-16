// TODO: DB(mysql) 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});
/**
 *  뷰에서 요청
 *  -> 컨트롤러에서 정보를 받고 모델로 보내준다(req,body, req.query, req.params, ...)
 *  -> 모델에서 db로 정보를 요청
 *  -> 모델에서 데이터 삽입/삭제/조회/.. 이 결과값을 컨트롤러로 응답
 *  -> 컨트롤러에서는 res 객체를 통해 뷰로 응답
 * 뷰 > 컨트롤러 > 모델 > DB > 모델 > 컨트롤러 > 뷰
 *
 */

// TODO: 모델 코드
//POST /user/signup
//특정 회원정보 "등록"
exports.post_signup = (data, cb) => {
  console.log("model", data);

  const sql = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}','${data.name}','${data.pw}') `;
  conn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("rows", rows);

    cb(); //Cuser .post_signup(req,body, ()=>{})에서 ()=>{}이 콜백함수이다!
  });
};

//POST /user/signin
//특정 회원정보를 "조회"
exports.post_signin = (data, cb) => {
  console.log("model", data); // {userid, pw}
  const sql = `SELECT * FROM user 
            WHERE userid='${data.userid}' AND pw='${data.pw}' LIMIT 1`;
  //LIMIT 1 걸어주는 이유 => 회원가입시 중복체크 안했기 때문에 select의 결과가 여러개 일 수있기 때문에
  conn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("model", rows); //[{id, userid, name, pw}]
    cb(rows);
  });
};

exports.post_profile = (id, cb) => {
  console.log("model userid", id); //id = 'allie'
  const sql = `SELECT * FROM user WHERE userid='${id}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("model", rows); //[{id, userid, name, pw}]
    cb(rows[0]);
  });
};

//POST /user/profile/edit
//회원 정보 "수정" 요청
exports.edit_profile = (data, cb) => {
  console.log("model", data); //{id, name, pw}
  const sql = `UPDATE user set name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("model edit", rows);
    cb();
  });
};

//POST /user/profile/delete
//회원 정보 "삭제"
exports.delete_profile = (id, cb) => {
  console.log("model delete id", id);
  const sql = `DELETE FROM user WHERE id='${id}'`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    cb();
  });
};
