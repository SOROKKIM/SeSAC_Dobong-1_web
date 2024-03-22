export default function PostItem({ post }) {
  // post = {id:1, title:"", body:""}
  return (
    <div>
      <div>
        <span>NO, {post.id}</span>
        <span> - {post.title}</span>
      </div>
      <p>{post.body}</p>
    </div>
  );
}
