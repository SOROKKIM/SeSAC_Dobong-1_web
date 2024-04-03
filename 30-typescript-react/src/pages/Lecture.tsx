import HeaderMenu from "../components/Header";
import Container from "../components/lecture/Container";
import Text from "../components/lecture/Text";
import { Props1, Props2, Props3 } from "../components/lecture/Props";
import EventObj from "../components/lecture/EventObj";
import TodoList from "../components/lecture/TodoList";
import GenericList from "../components/lecture/GenericList";

export default function Lecture() {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <h2>수업코드</h2>
      <Container>
        {/* <Props1 name="allie" />
        <Props2 width="100px" height="100px" color="pink" />
        <Props3 width={150} height={150} color="yellow" text="hello" /> */}
        {/* <Text /> */}
        {/* <EventObj /> */}
        {/* <TodoList /> */}
        <GenericList />
      </Container>
    </>
  );
}
