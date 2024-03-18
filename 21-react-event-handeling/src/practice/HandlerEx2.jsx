import { useState } from "react";

const HandleEx2 = () => {
  const [text, setText] = useState("검정색 글씨");
  const [color, setColor] = useState("black");

  const changeRed = () => {
    setText("빨간색 글씨");
    setColor("red");
  };

  const changeBlue = () => {
    setText("파란색 글씨");
    setColor("blue");
  };

  return (
    <div>
      <h1 style={{ color }}>{text}</h1>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </div>
  );
};

export default HandleEx2;
