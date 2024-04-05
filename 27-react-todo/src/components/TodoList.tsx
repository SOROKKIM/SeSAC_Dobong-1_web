import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../store/module/todo";
import { RootState } from "../store/module/todo"; // RootState import 변경

export default function TodoList() {
  const todoState = useSelector((state: RootState) => state.todo); // RootState 사용
  console.log(todoState.list); //{id, text, done}
  const todoList = todoState.list
    ? todoState.list.filter((li) => li.done === false)
    : [];

  const dispatch = useDispatch();
  const todoRef = useRef<HTMLInputElement>(null);
  const createTodo = () => {
    if (todoRef.current && todoRef.current.value.trim() !== "") {
      dispatch(create({ id: todoState.nextID, text: todoRef.current.value }));
      todoRef.current.value = "";
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      createTodo();
    }
  };

  return (
    <section className="TodoList">
      <h2>오늘의 할일</h2>
      <div>
        <input
          type="text"
          placeholder="Todo"
          ref={todoRef}
          onKeyDown={handleKeyDown}
        />
        <button onClick={createTodo}>할 일 추가</button>
      </div>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => dispatch(done(todo.id))}>완료</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
