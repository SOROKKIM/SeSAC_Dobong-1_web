export default function Container({ children }) {
  return (
    <>
      <header>📨 Post List</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
