/**
 * 구조 분해 할당
 */


/* 1. 배열의 구조분해 할당 */
const arr = ["tomato", "kiwi", "banana"];
console.log(arr[2]);
const [to, ki, ba] = arr;
console.log(ki);

const arr2 = ["빨", "주", "노", "초"];
const [red, orange, , green] = arr2;
console.log(red, green);

// 값 변경하기
let x = "first";
let y = "second";
[x, y] = [y, x];

console.log(x, y);
let x2 = "first";
let y2 = "second";
let temp;
temp = x2;
x2 = y2;
y2 = temp;

/* 2. 객체의 구조분해 할당 */
const obj = {
	title: "제목",
	content: "내용",
	number: 0,
};

console.log(obj.title);

const { title: t2, content, number } = obj;
// console.log(title);
console.log(t2);


// - 전개 구문 ... 연산자

const arr3 = [1,2,3,4,5]
const arr4 = ['a','b','c']

console.log(arr3);
console.log(arr4);

for (let e1 of arr3) {
    console.log(e1);
}
console.log(...arr3);

//[1,2,3,4,5, 'a', 'b', 'c']
const arr5 = arr3.concat(arr4)
const arr6 = [...arr3, ...arr4]

console.log('======================');
console.log(arr5);
console.log(arr6);

const str = 'boahi'
let strToArr = [...str]
let strToArr2 = str.split('');

console.log(strToArr);
console.log(strToArr2);

const me1 = {
    name: 'boa',
    height: 157,
    friend: null,
    married: false,

}

const me2 = {
    name: 'YJ',
    like: ['코딩', '여행'],
    greeting:function() {
        console.log(`안녕하세요, 제 이름은 ${this.name}입니다. 키는 ${this.height}입니다`);
    }
}
let me = {...me1, ...me2}
console.log(me);
me.greeting()

console.log('=======================');
//실습 spread 연산자 사용하기
const word1 = 'abc'
const word2 = 'xyz'

let result1 = [...word1,...word2] //전개 연산자 사용
console.log(result1);

let result2 = (word1.concat(word2)).split('')
console.log(result2);
console.log('==============================');

//rest
const obj2 = {
    title: "제목",
	content: "내용",
	num: 0,
    key4: 'value4',
    key5: 'value5'
}
const {title:a, content:b, num:c, ...obj3} = obj2
console.log(obj3);
console.log('=========================');

function test(...value) {
    console.log(value);
    const [a,b, ...rest] = value
    console.log(a);
    console.log(b);
    console.log(rest);
}
test(1,2,3,4,5,6)
console.log('================================');

//quiz
//매개변수가 몇개가 들어오든 합산해주는 함수 addNumber()
function addNumber(...value) {
    let sum = 0
    const [...rest] = value
    for (let i=0; i < value.length; i++) {
        sum += value[i]
    }
    return sum
}
let result = addNumber(1,2,3,4,5,6,7)
console.log(result);

//정답
function addNumber2(...rest) {
    console.log(rest);
    let sum = 0
    rest.forEach((el) => {
        sum += el;
    })
    return sum
}
let result3 = addNumber2(1,2,3,4,5)
console.log(result3);