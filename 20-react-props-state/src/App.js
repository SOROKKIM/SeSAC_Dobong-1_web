import { ClassProps, ClassProps2 } from "./components/ClassProps";
import { FunctionProps, FunctionProps2 } from "./components/FunctionProps";
import { FunctionPropsPractice } from "./components/PracticeFuncProps2";
import { FoodProps, TextProps } from "./components/PracticeProps1";
import "./App.css";
import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";
import ClassStatePrac from "./components/ClassStatePrac";
import FunctionStatePrac from "./components/FunctionStatePrac";
import PororoObj from "./components/PororoObj";

// valid 함수 정의
function valid() {
  console.log("콘솔 띄우기 성공!");
}
function App() {
  return (
    <div className="App">
      {/* <h1>Hello, props</h1> */}
      {/* <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps name="뽀로로" color="skyblue" nickname="사고뭉치" />
      <ClassProps2 name="포비" color="navy" nickname="곰" bgColor="beige" />
      <FunctionProps name="사과" number={5} price={2000} />
      <FunctionProps2 price={2000} />
      <FunctionProps2 price={10000} name="딸기">
        <section style={{ backgroundColor: "yellow" }}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section>
      </FunctionProps2> */}
      {/* <FoodProps foodname="불고기" color="red"></FoodProps>
      <FunctionPropsPractice
        className="book"
        title="나의 하루는 4시 40분에 시작된다."
        author="김우진"
        price={13500}
        type="자기개발서"
      ></FunctionPropsPractice>
      <TextProps text="아무거나 Text" valid={valid}></TextProps> */}
      {/* <h1>Hello, state</h1>
      <ClassState></ClassState>
      <FunctionState></FunctionState> */}
      <h1>Class state Practice</h1>
      <ClassStatePrac></ClassStatePrac>
      <h1>Function state Practice</h1>
      <FunctionStatePrac></FunctionStatePrac>
      <h1>Function Props, State Practice</h1>
      <PororoObj></PororoObj>
    </div>
  );
}

export default App;
