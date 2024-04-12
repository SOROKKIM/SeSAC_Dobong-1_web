const express = require("express");
const ws = require("ws");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("clients");
});
const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
// console.log(server); // Server 객체 반환

//웹 소켓 서버 접속
const wsServer = new ws.Server({ server });

const sockets = []; //클라이언트들을 담을 배열

// return String
// 현재 시간관련 타임스탬프와 랜덤 문자열을 결합 > 고유 식별자 생성
function generateUniqueId() {
  // 타임스탬프
  const timestamp = Date.now().toString(36); // 36진수로 반환한 문자열

  // 랜덤 문자열
  const randomString = Math.random().toString(36).substring(2);
  //   'abcde'.substring(2); // 2번 인덱스 부터 끝 인덱스까지 반환

  return timestamp + randomString;
}
/**
 * Ws 모듈[설치 필요]의 이벤트
 * - connection : 클라이언트와 웹소켓 서버와 연결되었을때
 * - message :  클라이언트로부터 메세지를 받았을때
 * - error : 연결중에 오류가 났을때
 * - close : 클라이언트와 연결 종료
 */

wsServer.on("connection", (socket) => {
  // console.log(socket); // (하나의) 클라이언트에 대한 소켓 정보
  console.log("connection??!!");
  const clientId = generateUniqueId();
  sockets.push(socket); // 여러개의 클라이언트가 담겨져 있다!
  // 클라이언트로부터 받은 메세지
  socket.on("message", (message) => {
    /**
     * toString() 메소드를 사용하지않아도
     * `${버퍼객체}` 처럼 템플릿 리터럴을 함께 쓰면
     * 암시적으로 toString()처럼 사용할수있음
     */
    // console.log(message); // 버퍼 객체
    // <Buffer ec b1 84 ed 8c 85 eb b0 a9 ec 97 90 20 ec 9e 85 ec 9e a5 21>
    // const buftoString = message.toString("utf-8");
    // console.log(buftoString); // 버퍼객체를 문자열로 변환
    console.log(`${message}`);
    // {"msg":"안녕","name":"보아"}

    // 모든(전체) 클라이언트에게 동일한 메세지를 보내기 위해
    // sockets 배열 순회
    sockets.forEach((element) => {
      element.send(`${message}`); //Json 데이터를 클라이언트로 send
    });
    // socket.send("하나의 클라이언트에게 메세지"); // 그 순간에 하나의 클라이언트에게만 보내는거!
  });

  socket.on("error", (err) => {
    console.log("에러 발생~~", err);
  });
  socket.on("close", () => {
    console.log(`${clientId}와 연결이 종료되었어요!`);
  });
});
