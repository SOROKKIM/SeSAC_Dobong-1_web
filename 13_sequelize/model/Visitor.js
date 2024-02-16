//(임시) DB로부터 방명록 데이터를 받아옴 / db 연결전
// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가 왔다." },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };

const mysql = require("mysql");

//mysql 연결 설정
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});

//전체데이터 조회
// get /visitors
exports.getVisitors = (cb) => {
  // conn.query('데이터베이스 sql문', (err, rows)=> {
  conn.query("select * from visitor", (err, rows) => {
    if (err) throw err;
    console.log("Visitor.js 전체목록::", rows);

    cb(rows);
  });
};

//개별 데이터 조회
//GET /visitor
exports.getVisitor = (id, cb) => {
  conn.query(`SELECT * FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) throw err;
    console.log("Visitor.js 데이터 한개 조회", rows); //[{},{}]

    //하나의 데이터를 찾아도 배열 형태로 넘어옴
    cb(rows[0]);
  });
};

//데이터 등록
//insert into 사용
exports.postVisitor = (data, cb) => {
  // data = {name: 'boa', comment: '안녕'}
  conn.query(
    `INSERT INTO visitor VALUES(null, '${data.name}', '${data.comment}')`,
    (err, rows) => {
      if (err) throw err;
      console.log("Visitor.js post", rows);

      //   Visitor.js post OkPacket {
      //     fieldCount: 0,
      //     affectedRows: 1,
      //     insertId: 3,
      //     serverStatus: 2,
      //     warningCount: 0,
      //     message: '',
      //     protocol41: true,
      //     changedRows: 0
      //   }
      cb(rows.insertId);
    }
  );
};

exports.deleteVisitor = (id, cb) => {
  console.log(id);
  conn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) throw err;
    console.log("Visitor.js delete", rows);
    cb(rows);
  });
};

exports.patchVisitor = (data, cb) => {
  console.log(data);
  conn.query(
    `UPDATE visitor 
    SET name='${data.name}', comment='${data.comment}' 
    WHERE id=${data.id}`,
    (err, rows) => {
      if (err) throw err;
      console.log("Visitor.js patch", rows);
      cb(true);
    }
  );
};
