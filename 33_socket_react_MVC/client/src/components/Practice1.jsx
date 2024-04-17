import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});

export default function Practice1() {
  const [fromServerStr, setFromServerStr] = useState("");
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();

    socket.on("hello2", (msg) => {
      setFromServerStr(`server : ${msg}`);
    });

    socket.on("study2", (msg) => {
      setFromServerStr(`server : ${msg}`);
    });
    socket.on("bye2", (msg) => {
      setFromServerStr(`server : ${msg}`);
    });
  }, []);
  // const socket = io("http://localhost:8080"); // 서버 주소를 정확히 기입하세요.

  // useEffect(() => {
  //   socket.on("message_render", (message) => {
  //     setFromServerStr(`${message.text} : ${message.message}`);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [socket]);

  // const sendMessage = (text, message) => {
  //   const data = {
  //     text: text,
  //     message: message,
  //   };

  //   socket.emit("new_message", data);
  // };
  const hello = () => {
    socket.emit("hello", "hello");
  };
  const study = () => {
    socket.emit("study", "study");
  };
  const bye = () => {
    socket.emit("bye", "bye");
  };

  return (
    // <>
    //   <button onClick={() => sendMessage("hello", "안녕하세요.")}>hello</button>
    //   <button onClick={() => sendMessage("study", "공부합시다!")}>study</button>
    //   <button onClick={() => sendMessage("bye", "잘가~")}>bye</button>
    //   <h3>{fromServerStr}</h3>
    // </>
    <>
      <button onClick={hello}>hello</button>
      <button onClick={study}>study</button>
      <button onClick={bye}>bye</button>
      <h3>{fromServerStr}</h3>
    </>
  );
}
