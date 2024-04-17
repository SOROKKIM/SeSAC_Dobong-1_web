const socketIO = require("socket.io");
function socketHandler(server) {
  // server: app.js에서 Http 기반 서버 전달받을 예정
  // cors :  다른 서버에서 보내는 요청 제한

  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000", // react 서버와 통신하기 위함
    },
  });

  io.on("connection", (socket) => {
    // socket.on("test", (message) => {
    //   console.log(message);
    //   socket.emit("test2", "잘 받았습니다.");
    // });

    // 클라이언트로부터 메시지를 받아서 다시 브로드캐스팅
    // socket.on("new_message", (data) => {
    //   // 클라이언트로부터 메시지를 받아서 다시 브로드캐스팅
    //   io.emit("message_render", data);
    // });

    //리더님 해답
    socket.on("hello", (msg) => {
      console.log("client:", msg);
      socket.emit("hello2", "안녕하세요");
    });
    socket.on("study", (msg) => {
      console.log("client:", msg);
      socket.emit("study2", "공부합시다~!");
    });
    socket.on("bye", (msg) => {
      console.log("client:", msg);
      socket.emit("bye2", "잘가~");
    });
    socket.on("disconnect", () => {
      // 클라이언트 연결 해제
    });
  });
}

module.exports = socketHandler;
