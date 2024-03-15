// 함수형 컴포넌트로 진행
export default function PracticeJSX() {
  const name = "태양";
  const animal = "고양이";
  const a = 3;
  const b = 1;
  const title = "Hello World";
  return (
    <div>
      <h2>제 반려 동물의 이름은 {name}입니다.</h2>
      <h2>
        {name}는 {animal}입니다.
      </h2>

      <span>{3 + 5 === 8 ? "정답입니다!" : "오답입니다!"}</span>
      <br />
      <span>{a > b && "a가 b보다 큽니다"}</span>
      <div>
        <h1
          style={{
            backgroundColor: "#fbebd8",
            color: "orange",
            width: "400px",
            textAlign: "center",
          }}
        >
          {title}
        </h1>
        아이디 : <input />
        <br />
        <br />
        비밀번호 : <input />
      </div>
    </div>
  );
}
