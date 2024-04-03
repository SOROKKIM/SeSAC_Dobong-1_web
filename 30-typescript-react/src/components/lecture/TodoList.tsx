import React, { useRef, useState } from "react";
import TodoItem from "./TodoItem";
interface Todo {
  id: number;
  text: string;
  done: boolean;
}
export default function TodoList() {
  // Todo 리스트 전체를 담을 state(배열)
  const [todos, setTodos] = useState<Todo[]>([]);

  // 새로운 todo text를 담을 state
  const [newTodo, setNewTodo] = useState<string>("");

  //input Focus를 주기위한 Ref 생성
  const inputRef = useRef<HTMLInputElement>(null);

  const [doneList, setDoneList] = useState<Todo[]>([]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updatedTodo = [
        ...todos,
        { id: Date.now(), text: newTodo, done: false },
      ];
      console.log(updatedTodo);
      setTodos(updatedTodo);
      setNewTodo("");
      focusInput();
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addTodo();
  };

  // checkbox 선택시, Todo.done을
  // false > true로 true > false로 변경
  const toggleComplete = (id: number) => {
    // 인자로 전달된 id와 Todos의 요소에 있는 id가 같은 것을 찾아서 done값만 변경
    const updatedTodo = todos.map((todo) =>
      id === todo.id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodo);
    // console.log(todos);

    // 완료된 항목을 doneList로 이동
    const doneItem = updatedTodo.find((todo) => todo.id === id);
    if (doneItem && doneItem.done) {
      setDoneList([...doneList, doneItem]);
      setTodos(updatedTodo.filter((todo) => todo.id !== id));
    } else {
      setDoneList(doneList.filter((todo) => todo.id !== id));
    }
  };
  //input 창에 Focus 주기
  const focusInput = () => {
    // if (inputRef.current) {
    //   inputRef.current.focus();
    // }
    inputRef.current?.focus();
  };
  const completedTodos = todos.filter((todo) => todo.done);

  return (
    <div style={{ backgroundColor: "aliceBlue" }}>
      <h4>Todo list</h4>
      <input
        type="text"
        placeholder="todo..."
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={focusInput}>focus</button>

      <ul>
        {todos.map((todo) => {
          return <TodoItem todo={todo} toggle={toggleComplete} key={todo.id} />;
        })}
      </ul>

      <h4>done list</h4>
      <ul>
        {doneList.map((todo) => (
          <TodoItem todo={todo} toggle={toggleComplete} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}
