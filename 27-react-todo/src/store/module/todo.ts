// RootState 타입 정의
export interface RootState {
  todo: TodoState;
}

// TodoState 타입 정의
export interface TodoState {
  list: TodoItem[];
  nextID: number;
}

// TodoItem 타입 정의
interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

// 액션 타입 상수 정의
const CREATE = "todo/CREATE" as const;
const DONE = "todo/DONE" as const;

// 액션 생성자 함수 정의
export const create = (payload: { id: number; text: string }) => ({
  type: CREATE,
  payload,
});

export const done = (id: number) => ({
  type: DONE,
  id,
});

// 초기 상태 정의
const initialState: TodoState = {
  // RootState 대신 TodoState 사용
  list: [
    {
      id: 0,
      text: "react 공부",
      done: false,
    },
    {
      id: 1,
      text: "오픽 공부",
      done: true,
    },
    {
      id: 2,
      text: "유산소 1시간",
      done: false,
    },
  ],
  nextID: 3, // 초기 리스트의 길이
};

// interface Action {
//   type: string;
//   id?: number;
//   payload?: { id: number; text: string };
// }

interface Create {
  type: typeof CREATE;
  payload: { id: number; text: string };
}
interface Done {
  type: typeof DONE;
  id: number;
}

type Action = Create | Done;

// todoReducer 함수 정의
export function todoReducer(state: TodoState = initialState, action: Action) {
  switch (action.type) {
    case CREATE:
      if (action.payload.text.trim() === "") return state;
      return {
        ...state,
        list: state.list.concat({
          // state.todo.list 대신 state.list 사용
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((li: TodoItem) => {
          if (li.id === action.id) {
            return {
              ...li,
              done: true,
            };
          } else {
            return li;
          }
        }),
      };
    default:
      return state;
  }
}
