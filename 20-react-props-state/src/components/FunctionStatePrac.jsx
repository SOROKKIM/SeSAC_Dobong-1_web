import { useState } from "react";

export default function FunctionStatePrac() {
  const [num, setNum] = useState(0);
  function increase() {
    setNum(num + 1);
  }
  function decrease() {
    setNum(num - 2);
  }

  return (
    <div>
      <p>
        {num}
        {num > 7 ? "😄" : "😭"}
      </p>
      <button onClick={increase}>1증가</button>
      <button onClick={decrease}>2감소</button>
    </div>
  );
}
