import img from "../components/책.jpg";

export function FunctionPropsPractice(props) {
  //   props = {
  //     title: "사과는 맛있다",
  //     author: "김의열",
  //     price: 10000,
  //     type:"자기개발서",
  //   };
  const divStyle = {
    backgroundColor: "beige",
    width: "500px",
    height: "650px",
  };
  return (
    <div style={divStyle}>
      <h2 style={{ color: "orange", marginTop: "30px" }}>이번주 베스트 셀러</h2>
      <img src={img} alt="apple" />
      <h3>{props.title}</h3>
      <p>저자 : {props.author}</p>
      <p>판매가 : {props.price}</p>
      <p>구분 : {props.type}</p>
    </div>
  );
}
