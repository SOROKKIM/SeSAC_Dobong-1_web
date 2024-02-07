// 간단한 ID와 PW 변수로 지정
const validId = "dd";
const validPw = "123";

exports.loginInfo = () => {
  return {
    id: validId,
    pw: validPw,
  };
};

//실습2
const users = [
  {
    id: "apple",
    pw: "1234",
    name: "사과사과",
  },
  {
    id: "banana",
    pw: "4321",
    name: "바나나나나",
  },
  {
    id: "cocoa",
    pw: "qwer1234",
    name: "미떼",
  },
];
exports.userInfo = users;
