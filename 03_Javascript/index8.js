/** Date 객체 
 * 현재 시간, 날짜에 대한 정보를 얻기 위해 사용
 * 원하는 값으로 초기화 가능
*/

let now = new Date();
console.log(now);
// console.log(new Date('날짜 문자열'));
console.log(new Date('september 30, 2000 12:00:00'));
console.log(new Date(2002,3,2,1,1,20)); //시간 지정할 수 있음!

console.log(now.getFullYear(), '년');
console.log(now.getMonth(), '월'); // 0~11까지로 나옴
console.log(now.getDate(), '일'); //얘는 1부터 값 나옴
console.log(now.getHours(), '시'); //0~23
console.log(now.getMinutes(), '분'); // 0~59
console.log(now.getSeconds(), '초'); //0~59
console.log(now.getMilliseconds(), '밀리초'); //0~999
console.log(now.getDay(), '요일'); //(0~6) 0 일요일 1 월요일 ....

console.log('====================');

/** Math 객체 */
console.log(Math.PI); //파이
console.log(Math.E); //자연로그 
console.log(Math.SQRT2); // 루트2

console.log('===================');
//메소드
console.log(Math.min(1,2,3,4,5, -5, -7.5));
console.log(Math.max(1,2,3,4,5, -5, -7.5));
console.log(Math.ceil(5.1)); //올림
console.log(Math.floor(5.5)); //내림
console.log(Math.floor(-5.5)); //내림
console.log(Math.round(5.5)); //반올림
console.log(Math.round(5.3)); //반올림
console.log(Math.random()); //범위 존재 : 0 <= X < 1 사이의 수만 랜덤으로 뽑아줌
console.log(Math.floor(Math.random() * 3)); //        0 <= x < 3 범위의 자연 수

//로또번호 0 <= x < 45 =====변신=====> 1 <= x < 46
console.log(Math.floor((Math.random() * 45) + 1));


//object 관련 객체
const areaNum = {
    Seoul : '02',
    Incheon : '032',
    Busan : '051',
    Ulsan : '052',
    Gwangju : '062',
    Jeju : '064'
}


const obj = new Object({
    a:'10',
    b:'55'
})
console.log(obj);
//각각 key와 value를 뽑아서 배열로 반환하는 객체의 메소드
const area = Object.keys(areaNum);
const number = Object.values(areaNum);

console.log(area, number);

//내장객체 실습
console.log("===========내장객체 실습1===========");

let today = new Date();
today.getDay === 0 || today.getDay === 6 ? console.log("주말"):console.log("평일")
console.log(today);

console.log("===========내장객체 실습2===========");
console.log(Math.floor(Math.random() * 11));
