import LifeCycleClass from "./components/LifeCycleClass";
import LifeCycleFunc from "./components/LifeCycleFunc";
import PracticeLifeCycleFunc from "./components/Practice";
import Container from "./components/Practice/Container";
import FakePost from "./components/Practice/FakePost";
import PostList from "./components/Practice/PostList";
import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefClass } from "./components/RefClass";
import { RefFunc1, RefFunc2 } from "./components/RefFunction";
function App() {
  return (
    <div className="App">
      {/* <h1>ref</h1>
      <RefClass1 />
      <RefClass2 />
      <RefFunc1 />
      <RefFunc2 /> */}
      {/* <h1>LifeCycle Class</h1> */}
      {/* <LifeCycleClass /> */}
      {/* <h1>LifeCycle Func</h1>
      <LifeCycleFunc /> */}
      <h1>PracticeLifeCycleFunc</h1>
      {/* <PracticeLifeCycleFunc /> */}
      <h1>PracticeLifeCycleFunc 리더님 해답</h1>
      {/* <FakePost /> */}
      <Container>
        <PostList />
      </Container>
    </div>
  );
}

export default App;
