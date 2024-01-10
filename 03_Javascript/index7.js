//문자열에서 사용가능한 속성/메소드

/**
 *  -length
 *  -toUpperCase, trim, indexOf, slice, replace, replaceAll, repeat, split 
 */

let str1 = "Strawberry Moon";
let str2 = "    Strawberry Moon    ";

//문자열 인덱싱
console.log(str1[5]);
console.log(str1[5]+str1[0]+str1[8]);

console.log('str1 문자열 길이', str1.length);
console.log('str2 문자열 길이', str2.length);

let msg = "Happy Birthday~"
let userId = "    user123"

console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(str2.trim().length);
console.log(userId.trim());


let mango = 'applemango';

//indexOf
console.log(mango.indexOf("apple")); //이럴때는 시작점을 출력 반환값은 숫자
console.log(mango.indexOf("mango"));
console.log(mango.indexOf('x')); // 문자열에 포함되지 않는 문자열이 매개변수로 들어가면 -1을 반환한다.


//slice => 실제 문자열이 변하지는 않는다.!
console.log(mango.slice(5)); //출력값 mango
console.log(mango.slice(3,6)); //인덱스값 3이상 6미만 3,4,5 값 출력 = > lem
console.log(mango.slice(-1)); //뒤에서부터 센다.
console.log(mango.slice(-4));

let msg2 = "Wow It is so amazing!!!";
console.log(msg2.replace("Wow", "Oh")); //대소문자 구별 필수
console.log(msg2.replaceAll("o", 'O'));

let date = "2024.1.10"
//2024-1-10
console.log(date.replaceAll(".", "-"));
console.log(date);

console.log("abc".repeat(10));

console.log(date.split("."));
