import ChangeObj from "./ChangeObj";

export default function PororoObj() {
  const pororoObjArr = [
    { name: "뽀로로", age: "7", nickname: "사고뭉치" },
    { name: "루피", age: "5", nickname: "공주님" },
    { name: "크롱", age: "4", nickname: "장난꾸러기" },
  ];
  return (
    <div>
      <ChangeObj objArr={pororoObjArr} />
    </div>
  );
}
