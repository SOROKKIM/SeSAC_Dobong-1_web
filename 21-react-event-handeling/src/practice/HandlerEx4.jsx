// 종합 실습 (props, state, event)
import { useState } from "react";

const HandleEx4 = () => {
  const [fruit, setFruit] = useState("사과");
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [textColor, setTextColor] = useState("white");
  const [content, setContent] = useState("text");

  const fruitImages = {
    사과: "/사과.jpeg",
    바나나: "/바나나.jpeg",
    포도: "/포도.jpg",
  };

  const handleFruitChange = (e) => {
    setFruit(e.target.value);
  };
  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <p>
        과일:
        <select value={fruit} onChange={handleFruitChange}>
          <option value="사과">사과</option>
          <option value="포도">포도</option>
          <option value="바나나">바나나</option>
        </select>
        배경색:
        <select value={backgroundColor} onChange={handleBackgroundColorChange}>
          <option value="black">검정</option>
          <option value="white">하양</option>
          <option value="red">빨강</option>
          <option value="orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="purple">보라</option>
          <option value="pink">분홍</option>
        </select>
        글자색:
        <select value={textColor} onChange={handleTextColorChange}>
          <option value="black">검정</option>
          <option value="white">하양</option>
          <option value="red">빨강</option>
          <option value="orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="purple">보라</option>
          <option value="pink">분홍</option>
        </select>
      </p>
      <p>
        내용:
        <input
          type="text"
          value={content}
          onChange={handleContentChange}
          placeholder="내용을 입력하세요"
        />
      </p>
      <img
        src={fruitImages[fruit]}
        alt={fruit}
        style={{ width: "300px", height: "300px" }}
      />
      <div
        style={{
          backgroundColor,
          color: textColor,
          width: "100px",
          height: "45px",
          alignItems: "center",
          display: "flex",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default HandleEx4;
