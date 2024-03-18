// export function FunctionProps(props) {
//   //   props = {
//   //     name: "사과",
//   //     price: 2000,
//   //     number: 5,
//   //   };
//   return (
//     <div>
//       <h5>{props.name}</h5>
//       <p>
//         {props.number}개에 {props.price}원
//       </p>
//       <hr />
//     </div>
//   );
// }

// // 구조 분해 할당 사용
// export function FunctionProps(props) {
//   //   props = {
//   //     name: "사과",
//   //     price: 2000,
//   //     number: 5,
//   //   };
//   const { name, number: count, price } = props;
//   return (
//     <div>
//       <h5>{name}</h5>
//       <p>
//         {count}개에 {price}원
//       </p>
//       <hr />
//     </div>
//   );
// }

// 객체 바로 받아올때
export function FunctionProps({ name, number, price }) {
  //   props = {
  //     name: "사과",
  //     price: 2000,
  //     number: 5,
  //   };
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number}개에 {price}원
      </p>
      <hr />
    </div>
  );
}

export function FunctionProps2(props) {
  //   props = {
  //     name: "사과",
  //     price: 2000,
  //     number: 5,
  //   };
  const { name, number, price } = props;
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number}개에 {price}원
      </p>
      <div>{props.children}</div>
      <hr />
    </div>
  );
}
// default props 설정하기
// 컴포넌트 이름.defaultProps={정의할 데이터를 객체로 표현}
FunctionProps2.defaultProps = {
  number: 3,
  name: "샤인머스켓",
};
