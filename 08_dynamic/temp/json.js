const obj = `{
    "model": "아이오닉",
    "price": 50000000,
    "isElectric": true,
    "option": ["사이드미러", "스마트 스크린"]
}`;
console.log(obj);
console.log(typeof obj);
console.log(obj.model); //undefined 뜸

//실제 객체로 변경
// JSON.parse(실제 json 데이터) : json -> object 로 변경시켜준다.
const carInfo = JSON.parse(obj);
console.log("*************OBJECT*************");
console.log(carInfo);
console.log(typeof carInfo);
console.log(carInfo.model);

//JSON.strigify(객체) : objec -> json 으로 변경시켜준다.
console.log("**************JSON*************");
const carJson = JSON.stringify(carInfo);
console.log("json1", carJson);
const carJson2 = JSON.stringify(carInfo, null, 5); //5 숫자는 들여쓰기 공백 갯수
console.log("json2", carJson2);
console.log(carJson2.model); //undefined , 타입이 string 이기 때문에 그렇다!
