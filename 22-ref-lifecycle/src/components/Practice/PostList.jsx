import axios from "axios";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res.data);
    setPosts(res.data.slice(0, 10));
  };
  // useEffect의 첫번째 인자인 콜백함수는 async await를 사용하지 못한다! 그래서 위에 따로 함수 만들어 호출해야함!
  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    //   console.log(res.data);
    //   setPosts(res.data);
    // });
    getPosts();
  }, []);
  return (
    <div className="post-list">
      {/* <h1>실습문제</h1> */}
      {posts.length > 0
        ? posts.map((post) => {
            return <PostItem post={post} />;
          })
        : "loading..."}
    </div>
  );
}
