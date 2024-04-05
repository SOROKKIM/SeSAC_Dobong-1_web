import { useSelector } from "react-redux";
import { RootState } from "../store/module/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DoneList() {
  const list = useSelector((state: RootState) => state.todo.list);
  const doneList = list ? list.filter((li) => li.done === true) : [];

  return (
    <section className="DoneList">
      <h2>완료한 일</h2>
      <ul>
        {doneList.map((done) => {
          return (
            <li key={done.id}>
              <span>{done.text}</span>
              <span>
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
