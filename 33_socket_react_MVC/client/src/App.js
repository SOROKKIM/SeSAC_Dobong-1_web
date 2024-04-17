import Chatting1 from "./components/Chatting1";
import Practice1 from "./components/Practice1";
import Start from "./components/Start";
import "./styles/chat.css";
import "bootstrap/dist/css/bootstrap.css";
import Chatting2 from "./components/Chatting2";
import Chatting3 from "./components/Chatting3";
function App() {
  return (
    <div className="App">
      <h1>socket 사용해보기</h1>
      {/* <Start /> */}
      {/* <Practice1 /> */}
      {/* <Chatting2 /> */}
      <Chatting3 />
    </div>
  );
}

export default App;
