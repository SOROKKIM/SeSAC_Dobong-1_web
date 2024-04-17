const express = require("express");
const http = require("http");
const app = express();
const socketIO = require("socket.io");
const server = http.createServer(app);

// 소켓이 http모듈로 생성된 서버에 동작
const io = socketIO(server);
const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

io.on("connection", (socket) => {
  /**실습 3번 입장 1*/
  socket.broadcast.emit("notice", `${socket.id}님이 입장하셨습니다.`);

  /**실습 4번 채팅 주고받기 */
  // 실습 4번 -2 메세지를 전달받아서, 전체에게 메세지 뿌려주기
  socket.on("send", (message) => {
    console.log(`${socket.id}: ${message}`);
    io.emit("message", { id: socket.id, message: message });
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
