import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  // {
  //       id: 1,
  //       name: '다이슨 슈퍼소닉',
  //       email: 'Eliseo@gardner.biz',
  //       body: '다이슨 슈퍼소닉 헤어드라이어를 위한 자석 부착형 스타일링 노즐, 스탠드 및 스타일링 액세서리.',
  //     },
  return (
    <Link to={`/products/${product.id}`} className="ProductItem">
      <ul>
        <li>상품명 : {product.name}</li>
        <li>상세설명 : {product.body.slice(0, 80)}</li>
      </ul>
    </Link>
  );
}
