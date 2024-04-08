import HeaderMenu from "../components/Header";
import PostList from "../components/practice/PostList";
import { Link } from "react-router-dom";
export default function Practice() {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <br />
      <Link to="/practice/matzip">맛집</Link>
      <h4>연습문제</h4>
      <PostList />
    </>
  );
}
