import { useState } from "react";

const HandleEx = () => {
  const [str, setStr] = useState("Hello World!");
  const changeStr = () => {
    setStr("Goodbye World!");
  };

  return (
    <div>
      <h1>{str}</h1>
      <button onClick={changeStr}>클릭</button>
    </div>
  );
};

export default HandleEx;
