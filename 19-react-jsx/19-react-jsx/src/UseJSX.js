import ClassComp from "./ClassComp";

export default function UseJSX() {
  // 인라인 스타일 적용하기
  //   const divStyle = {
  //     width: "100px",
  //     height: "100px",
  //     backgroundColor: "burlywood",
  //     textAlign: "center",
  //     color: "green",
  //     marginTop: "0.5rem",
  //     display: "inline-block",
  //     border: "1px solid red",
  //   };
  //   return (
  //     <div>
  //       <div
  //         style={{ color: "green", width: "100px", backgroundColor: "tomato" }}
  //       >
  //         first
  //       </div>
  //       <div style={divStyle}>secont</div>
  //       <div style={divStyle}>third</div>
  //       <div style={divStyle}> fourth</div>
  //     </div>
  //   );

  // JS 문법 사용해보기
  let isShow = false;

  function myFunc() {
    alert("안녕, 나는 보아야.");
  }
  function addNum(a, b) {
    alert(a + b);
  }
  return (
    <div>
      {/* <span>{myFunc()}</span> */}
      <div
        style={{ backgroundColor: "orange" }}
        onClick={() => {
          alert("눌렸습니다.");
        }}
      >
        {isShow ? "true 일때 보임" : "!!!"}
      </div>
      <div style={{ backgroundColor: "red" }}>{isShow && "true 일때 보임"}</div>
      <div style={{ backgroundColor: "gray" }} onClick={myFunc}>
        {isShow === false ? "isShow가 false 군요!" : "true 군요!"}
      </div>
      <div style={{ backgroundColor: "green" }}>
        {!isShow && "false 일때 보임"}
      </div>
      <div
        onClick={() => {
          addNum(8, 5);
        }}
      >
        <div
          onClick={() => {
            myFunc();
          }}
        >
          myFunc 실행
        </div>
        8더하기 5의 결과를 alert로 확인해봐요
      </div>
      <br />
      <br />
      <ClassComp />
      <hr />
      <div className="div"></div>
    </div>
  );
}
