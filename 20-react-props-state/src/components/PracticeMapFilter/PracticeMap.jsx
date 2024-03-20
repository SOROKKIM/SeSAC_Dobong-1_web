import { useState } from "react";

// export default function PracticeMap() {
//   const [list, setList] = useState([]);
//   const [inputName, setInputName] = useState("");
//   const [inputEmail, setInputEmail] = useState("");

//   const addContent = () => {
//     if (inputName.trim().length === 0 && inputEmail.trim().length === 0) return;
//     const newContent = {
//       name: inputName,
//       email: inputEmail,
//     };
//     setList(list.concat(newContent));
//     setInputName("");
//     setInputEmail("");
//   };
//   const activeEnter = (e) => {
//     console.log(e.key);
//     if (e.key === "Enter") {
//       addContent();
//     }
//   };
//   const deleteContent = (name, email) => {
//     console.log(name);
//     const newContent = list.filter(
//       (content) => content.name !== name || content.email !== email
//     );
//     setList(newContent);
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => setInputName(e.target.value)}
//         value={inputName}
//         placeholder="이름"
//         required
//       />
//       <input
//         type="email"
//         onChange={(e) => setInputEmail(e.target.value)}
//         value={inputEmail}
//         placeholder="이메일"
//         onKeyDown={(e) => {
//           activeEnter(e);
//         }}
//         required
//       />
//       <button onClick={addContent} disabled={!inputName || !inputEmail}>
//         등록
//       </button>
//       <ul>
//         {list.map((content) => {
//           return (
//             <li
//               style={{
//                 listStyle: "none",
//                 fontWeight: "700",
//                 marginTop: "10px",
//               }}
//               onDoubleClick={() => deleteContent(content.name, content.email)}
//             >
//               {content.name}: {content.email}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// 리더님 해답
export default function PracticeMap() {
  const [userList, setUserList] = useState([
    { id: 1, name: "코디", email: "codi@gmail.com" },
    { id: 2, name: "앨리", email: "allie@gmail.com" },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 실제 등록 시켜주는 함수
  /**
   * - userList state를 변경 후 재렌더링되도록
   * - 빈값이 입력되면 alert 띄우기
   * - 등록 후에 input 빈칸 만들기
   */
  const registerUser = () => {
    // 이름과 이메일 값 중 하나라도 안들어왔다면,
    if (name.trim().length === 0 || email.trim().length === 0) {
      alert("이름과 이메일 모두 작성해주세요.");
      return;
    }
    setUserList(
      userList.concat({
        id: userList.length === 0 ? 1 : userList[userList.length - 1].id + 1,
        name,
        email,
      })
    );
    setName("");
    setEmail("");
  };

  //엔터로 등록시켜주는 함수
  // - 두번째 input[type="email"]에 Enter 쳤을때 등록되도록
  const enterRegister = (e) => {
    if (e.key === "Enter") registerUser();
  };

  // 더블클릭했을때 삭제 되는 함수
  const deleteUser = (id) => {
    const newUserList = userList.filter((user) => user.id !== id);
    setUserList(newUserList);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="이름"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          type="email"
          placeholder="이메일"
          onKeyDown={enterRegister}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <button onClick={registerUser}>등록</button>
      </div>
      {userList.map((user) => {
        return (
          <h4
            key={user.id}
            onDoubleClick={() => {
              deleteUser(user.id);
            }}
          >
            {user.name} : {user.email}
          </h4>
        );
      })}
    </div>
  );
}
