// import logo from "./logo.svg";
// import './App.css';

import CustomHook from "./components/CustomHook";
import UseCallBack from "./components/UseCallback";
import UseCallback2 from "./components/UseCallback2";
import UseMemo from "./components/UseMemo";
import UseMemoObj from "./components/UseMemoObj";
import UseReducer from "./components/UseReducer";
import UseTitle from "./hooks/useTitle";

function App() {
  UseTitle("React hook!");
  return (
    <div className="App">
      <h1>react hook</h1>
      {/* <UseMemo />
      <UseMemoObj /> */}
      {/* <UseCallBack /> */}
      {/* <UseCallback2 /> */}
      {/* <UseReducer /> */}
      <CustomHook />
    </div>
  );
}

export default App;
