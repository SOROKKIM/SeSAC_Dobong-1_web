import { useState } from "react";

const HandleEx3 = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && <button onClick={toggleVisibility}>사라져라</button>}
      {!isVisible && <button onClick={toggleVisibility}>보여라</button>}
      {isVisible && <h1>안녕하세요</h1>}
    </div>
  );
};

export default HandleEx3;
