import { useState } from "react";

// export default function PracticeMapSearch() {
//   const [contentList, setContentList] = useState([
//     { id: 1, title: "제목1", author: "제목1" },
//     { id: 2, title: "제목2", author: "작성자2" },
//   ]);
//   const [author, setAuthor] = useState("");
//   const [title, setTitle] = useState("");

//   const create = () => {
//     // 작성자와 제목 값 중 하나라도 안들어왔다면,
//     if (author.trim().length === 0 || title.trim().length === 0) {
//       alert("작성자와 제목 모두 작성해주세요.");
//       return;
//     }
//     setContentList(
//       contentList.concat({
//         id:
//           contentList.length === 0
//             ? 1
//             : contentList[contentList.length - 1].id + 1,
//         author,
//         title,
//       })
//     );
//     setAuthor("");
//     setTitle("");
//   };
//   //엔터로 등록시켜주는 함수
//   // - 두번째 input[type="title"]에 Enter 쳤을때 등록되도록
//   const enterRegister = (e) => {
//     if (e.key === "Enter") create();
//   };
//   // 더블클릭했을때 삭제 되는 함수
//   const deleteContent = (id) => {
//     const newContentList = contentList.filter((content) => content.id !== id);
//     setContentList(newContentList);
//   };

//   return (
//     <div>
//       <div>
//         <label>
//           작성자 :
//           <input
//             type="text"
//             value={author}
//             onChange={(e) => {
//               setAuthor(e.target.value);
//             }}
//           />
//           제목 :
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => {
//               setTitle(e.target.value);
//             }}
//             onKeyDown={enterRegister}
//           />
//           <button onClick={create}>작성</button>
//         </label>
//       </div>
//       <div>
//         <select>
//           <option>작성자</option>
//           <option>제목</option>
//         </select>
//         <input type="text" placeholder="검색어" />
//         <button>검색</button>
//       </div>
//       <div>
//         <table style={{ border: "2px solid black", width: "100%" }}>
//           <thead>
//             <th>번호</th>
//             <th>제목</th>
//             <th>작성자</th>
//           </thead>
//           {contentList.map((content) => {
//             return (
//               <tbody
//                 onDoubleClick={() => {
//                   deleteContent(content.id);
//                 }}
//               >
//                 <td>{content.id}</td>
//                 <td>{content.title}</td>
//                 <td>{content.author}</td>
//               </tbody>
//             );
//           })}
//         </table>
//       </div>
//     </div>
//   );
// }

export default function PracticeMapSearch() {
  const [comment, setComment] = useState([
    { id: 1, writer: "작성자1", title: "제목1" },
    { id: 2, writer: "작성자2", title: "제목2" },
  ]);
  const [inputTitle, setInputTitle] = useState(""); //작성자 등록
  const [inputWriter, setInputWriter] = useState(""); // 제목 등록

  const [inputSearch, setInputSearch] = useState(""); // 검색어 input
  const [searchType, setSearchType] = useState("writer"); // 검색 타입 select

  const [result, setResult] = useState([]);

  const addComment = () => {
    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };
    //전개 연산자 사용
    setComment([...comment, newComment]);

    setInputTitle("");
    setInputWriter("");
  };
  //검색 타입 설정
  const selectSearchType = (e) => {
    setSearchType(e.target.value);
  };
  //실제 검색 -> filter 사용시 include랑 같이 하면 검색 가능
  const searchComment = () => {
    let searchResult = comment.filter((item) => {
      //   console.log(item[searchType].includes(inputSearch)); // true, false로 나옴
      if (!item[searchType].includes(inputSearch)) return null;
      return item;
    });
    // console.log(searchResult);
    setResult(searchResult);
    setInputSearch("");
  };
  return (
    <div>
      <form>
        <label htmlFor="writer">작성자</label>
        <input
          type="text"
          id="writer"
          value={inputWriter}
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
        />
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
        />

        <button onClick={addComment} type="button">
          작성
        </button>
      </form>
      <form>
        <select onChange={selectSearchType}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>
      <table border={1} style={{ margin: "30px auto", width: "500px" }}>
        <thead>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
          </tr>
        </thead>
        <tbody>
          {comment.map((co, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{co.title}</td>
                <td>{co.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 검색결과 */}
      {result.length === 0 ? (
        <h5>검색결과가 없습니다</h5>
      ) : (
        <table border={1} style={{ margin: "30px auto", width: "500px" }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((el, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{el.title}</td>
                  <td>{el.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
