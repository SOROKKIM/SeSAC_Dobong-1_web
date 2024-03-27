export default function PhotoPage({ photos }) {
  console.log(photos);
  return (
    <main className="PhotoPage">
      <p>여기는 상품목록 With 포토</p>
      {photos.map((photo) => {
        return (
          <ul key={photo.id}>
            <li>{photo.id}</li>
            <li>{photo.title}</li>
            <li>
              <img src={photo.url} alt="test" />
            </li>
          </ul>
        );
      })}
    </main>
  );
}
